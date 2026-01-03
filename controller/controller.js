import User from "../models/database.js";

export const getLoginPage = async (req, res) => {
    res.render('login');
};

export const renderProfilePage = async (req, res) => {
    // Debug full body and support common name formats: nested (`User[ID]`), flat (`ID`), lowercase, or bracket-keyed
    const body = req.body || {};
    console.log('renderProfilePage body:', body);

    const ID = (
        (body.User && (body.User.ID || body.User.id)) ||
        body['User[ID]'] ||
        body.ID ||
        body.id ||
        null
    );

    const password = (
        (body.User && (body.User.password || body.User.Password)) ||
        body['User[password]'] ||
        body.password ||
        body.Password ||
        null
    );

    try {
        const finduser = await User.findOne({ "user_name": `${ID}` });

        if (finduser) {

            if (password != finduser.password) {
                res.send("password is incorrect");
            } else {
                res.render('profilepage')
            };

        } else {
            res.send("user not found");
        };
    } catch (error) {
        console.error('internal error')
    };
};
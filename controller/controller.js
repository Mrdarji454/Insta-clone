import User from "../models/database.js";

export const getLoginPage = async (req, res) => {
    res.render('login');
};

export const renderProfilePage = async (req, res) => {
    // Debug full body and support common name formats: nested (`User[ID]`), flat (`ID`), lowercase, or bracket-keyed
    const { ID, password } = req.body;

    
    try {
        const finduser = await User.findOne({ "user_name": `${ID}` });

        if (!finduser) {
            res.send("user is not find");
        };
        if (password != finduser.password) {
            res.send("password is wrong");
        };
        res.render("profilepage");
    }
    catch (error) {
        console.log(error)
        console.error('internal error')
    };
};
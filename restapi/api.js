const express = require("express");
const User = require("./models/users");
const router = express.Router();
const nodemailer = require("nodemailer");
const { default: axios } = require("axios");

// Get all users
router.get("/users/list", async (req, res) => {
    const users = await User.find({}).sort("-_id"); //Inverse order
    res.send(users);
});

//register a new user
router.post("/users/add", async (req, res) => {
    let webId = req.body.webId;
    let location = req.body.location;
    //Check if the device is already in the db
    let user = await User.findOne({ webId });
    if (user) {
        res.send({ error: "Error: This user is already registered" });
    } else {
        user = new User({
            webId,
            location,
        });
        await user.save();
        res.send(user);
    }
});

//removes an existing user
router.post("/users/remove", async (req, res) => {
    let webId = req.body.webId;
    //Check if the device is already in the db
    let user = await User.findOne({ webId });
    if (user) {
        await user.remove({ webId });
        res.send(user);
    }
    res.send({ error: "Error: This user does not exist" });
});

router.get("/users/byWebId", async (req, res) => {
    var webId = req.headers.webid;
    let user = await User.findOne({ webId });
    res.send(user);
});

router.post("/users/update", async (req, res) => {
    let webId = req.body.webId;
    let location = req.body.location;

    let user = await User.findOne({ webId });
    if (!user) {
        user = new User({
            webId,
            location
        });
        await user.save();
        res.send(user);
    } else {
        user.location = location;
        await user.save();
        res.send(user);
    }
});

router.post("/users/update/token", async (req, res) => {
    let webId = req.body.webId;
    let token = req.body.token;

    let user = await User.findOne({ webId });
    if (!user) {
        user = new User({
            webId,
            token,
            location: {
                lat: "",
                lng: ""
            }
        });
        await user.save();
        res.send(user);
    } else {
        user.token = token;
        await user.save();
        res.send(user);
    }
});

router.post("/email/send", async (req, res) => {
    let destinatary = req.body.destinatary;
    let message = req.body.message;
    let subject = req.body.subject;

    let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "Radarin.info@gmail.com",
            pass: "Radarin2021"
        }
    });

    let mailDetails = {
        from: "Radarin.info@gmail.com",
        to: destinatary,
        subject,
        text: message
    };

    mailTransporter.sendMail(mailDetails, function (error, info) {
        if (err) {
            res.send(500, error.message);
        } else {
            res.status(200).jsonp(req.body);
        }
    });
});

router.post("/notification", async (req, res) => {
    const title = req.body.title;
    const message = req.body.message;
    const to = req.body.destinatary;

    const data = {
        "notification": {
            title,
            "body": message,
            "click_action": "https://radarines3awebapp.herokuapp.com/",
            "icon": "https://radarines3awebapp.herokuapp.com/LogoR.png"
        },
        to
    };
    const config = {
        "mode": "cors",
        "headers": {
            "authorization":
                "key=AAAAXtyz3bo:APA91bGeQa6vRw2sX0v_9oK603PSFzKnqujvuLC0w7msxCONzFfGmewaIbv7K-POoDFL5Ufu879b6NEos0ZBcUwYB9rfDl2zZVc8-dkYkleSbviX1RcbAbAzPqHO4tc0Ufb0SkHz17Sg",
            "content-type": "application/json"
        }
    };

    axios.post("https://fcm.googleapis.com/fcm/send", data, config);
});

module.exports = router;
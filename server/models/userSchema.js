const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: Number,
        required: true
    },
    Degination: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    Course: {
        type: String,
        required: true
    },
    imgUpload: {
        type: String,
        required: true
    }
});

const users = new mongoose.model("users",userSchema);

const Login = new mongoose.Schema({
    UserName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true,
        // unique: true
    },
    
});

const login = new mongoose.model("login",Login);

module.exports = {
    users,
    login,
};

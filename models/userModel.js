const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "User must have username!"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "User must have password!"],
    }
});

module.exports = mongoose.model("User", userSchema);
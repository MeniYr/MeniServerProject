const mongoose = require("mongoose");
const joi = require("joi");
const jwt = require("jsonwebtoken");

// Interface adjustment between mongo and nodejs by schema

let userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date_created: {
        type: Date, default: Date.now()
    },
    role: {
        type: String, default: "user"
    }
})
exports.UserModel = mongoose.model("users", userSchema);


// creat a token

exports.genToken = (_id,_role) =>{
let token = jwt.sign({_id},"meniYr",{expiresIn:"60mins"},{role:_role})
return token;
}

// valiidate signup user with Joi

exports.validateUsers = (_reqBody) => {
    let joiSchema = joi.object({
        name: joi.string().min(2).required(),
        email: joi.string().min(2).email().required(),
        password: joi.string().min(2).required()
    })
    return joiSchema.validate(_reqBody);
}

// valiidate log in user with Joi

exports.validateLogIn = (_reqBody) => {
    let joiSchema = joi.object({
        email: joi.string().min(2).email().required(),
        password: joi.string().min(2).required()
    })
    return joiSchema.validate(_reqBody);
} 
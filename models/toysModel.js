const mongoose = require("mongoose");
const joi = require("joi");
const { string, required } = require("joi");

// Interface adjustment between mongo and nodejs by schema


let toysSchema = new mongoose.Schema({
    name:String,
    info:String,
    category:String,
    img_url:String,
    price:Number,
    user_id:String,
    date_created:{
        type:Date, default:Date.now()
    } 
})
exports.ToysModel = mongoose.model("toys",toysSchema);

// valiidate a new toy post with Joi

exports.validateToys = (_reqBody)=>{
    let joiSchema = joi.object({
        name: joi.string().min(2).required(),
        info: joi.string().min(5).max(500).allow(null,""),
        category: joi.string().required(),
        img_url: joi.string().required(),
        price: joi.number().required()
    })
    return joiSchema.validate(_reqBody);
}
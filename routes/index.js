const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{
    res.json({msg: "Welcome to meni`s server merging project."})
})

module.exports = router;

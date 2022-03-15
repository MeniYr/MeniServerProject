const express = require("express");
const { status } = require("express/lib/response");
const { auth } = require("../midleWares/auth");
const { ToysModel, validateToys } = require("../models/toysModel");
const router = express.Router();


//  get all toys 

router.get("/", async (req, res) => {

    try {
        let search = req.query.s;
        let page = req.query.page || 1;
        page < 1 ? page = 1 : 0;
        let perPage = 10;
        let regSrch = new RegExp(search, "i");
        let data = await ToysModel.find({ $or: [{ name: regSrch }, { info: regSrch }] })
            .limit(perPage)
            .skip((page - 1) * perPage)
        res.json(data);
    }

    catch (err) {
        console.log(err);
        res.status(500).json({ err_msg: "server problem" });
    }

})

//  get a toy with search by category 

router.get("/cat/:catname", async (req, res) => {
    try {
        let page = req.query.page || 1;
        let perPage = 10;
        let catname = req.params.catname;
        let regExp = new RegExp(catname, "i");
        let data = await ToysModel.find({ category: regExp || "" })
            .limit(perPage)
            .skip((page - 1) * perPage)
        res.json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ err_msg: "server problem" });
    }
})

//  get a toy with search by price 

router.get("/prices", async (req, res) => {
    let min = req.query.min;
    let max = req.query.max;
    let range = await ToysModel.find({ price: { $lte: max, $gte: min } });
    res.json(range);
    // https://docs.mongodb.com/manual/reference/operator/query-comparison/
    //http://localhost:3000/toys/prices?max=150&min=100
})

// insert a new toy

router.post("/", auth, async (req, res) => {
    let checkValid = validateToys(req.body);
    if (checkValid.error)
        return res.status(400).json(checkValid.error.details);
    try {
        let toy = new ToysModel(req.body);
        toy.user_id = req.TokenData._id;
        await toy.save();
        res.status(201).json(toy);
    }

    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

})

// edit a toy with id

router.put("/:editId", auth, async (req, res) => {

    let validReq = validateToys(req.body);
    if (validReq.error) {
        return res.status(400).json(validReq.error.details)
    }
    try {
        let editId = req.params.editId;
        let DocUP = await ToysModel.updateOne({ _id: editId, user_id: req.TokenData._id }, req.body)
        res.json(DocUP);
    }

    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

})

// delete a toy with id.

router.delete("/:delId", auth, async (req, res) => {
    try {
        let IdToDel = req.params.delId;
        let DocDel = await ToysModel.deleteOne({ _id: IdToDel, user_id: req.TokenData._id });
        res.json(DocDel);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})



module.exports = router;



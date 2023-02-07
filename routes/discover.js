const { Router } = require("express");
const route = Router();
const category = require("../modules/category");


route.post("/api/addCategory/:categoryName",async(req,res,next)=>{
    try {
        const categoryName = req.params.categoryName;
        await category.create({name: categoryName});
        res.send("created");
    } catch (error) {
        console.log(error);
        next(error);
    }
});

route.get("/api/getCategories",async(req,res,next)=>{
    try {
        category.find({},(err,found)=>{
            if(err){
                console.log(err);
                return;
            }
            res.send(found);
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
})

module.exports = route;

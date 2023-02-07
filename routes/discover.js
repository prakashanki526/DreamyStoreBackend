const { Router } = require("express");
const route = Router();
const category = require("../modules/category");
const color = require("../modules/color");
const company = require("../modules/company");
const product = require("../modules/product");

route.get("/api/getColors",(req,res,next)=>{
    try {
        color.find({},(err,found)=>{
            if(!err){
                res.send(found);
            }
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
});

route.get("/api/getCompanies",(req,res,next)=>{
    try {
        company.find({},(err,found)=>{
            if(!err){
                res.send(found);
            }
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
})

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

route.get("/api/getProducts",(req,res,next)=>{
    try {
        product.find({},(err,found)=>{
            if(!err){
                res.send(found);
            }
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
})

module.exports = route;

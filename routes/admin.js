const { Router } = require("express");
const route = Router();
const category = require("../modules/category");
const color = require("../modules/color");
const product = require("../modules/product");
const company = require("../modules/company");

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

route.post("/api/addCompany/:companyName",async(req,res,next)=>{
    try {
        const companyName = req.params.companyName;
        await company.create({name: companyName});
        res.send("added");
    } catch (error) {
        console.log(error);
        next(error);
    }
});

route.post("/api/addColor/:colorName",async(req,res,next)=>{
    try {
        const colorName = req.params.colorName;
        await color.create({name: colorName});
        res.send("created");
    } catch (error) {
        console.log(error);
        next(error);
    }
});

route.post("/api/addProduct",async(req,res,next)=>{
    try {
        const name = req.body.name;
        const price = req.body.price;
        const reviewCount = req.body.reviewCount;
        const rating = req.body.rating;
        const about = req.body.about;
        const available = req.body.available;
        const SKU = req.body.SKU;
        const company = req.body.company;
        const color = req.body.color;
        const images = req.body.images;

        await product.create({
            name: name,
            price: price,
            reviewCount: reviewCount,
            rating: rating,
            about: about,
            available: available,
            SKU: SKU,
            company: company,
            color: color,
            images: images
        });
        res.send("product added");

    } catch (error) {
        console.log(error);
        next(error);
    }
})

module.exports = route;

const express=require('express')
const Product=require("../models/Mproduct")
const router=express.Router()

//test
router.get("/test",(req,res)=>{
    res.send("hello router")
})
//addNewProduct
router.post("/addProduct",async(req,res)=>{
    try{

        const newProduct=new Product(req.body)
        await newProduct.save()
        res.send({product:newProduct,message:"product succesffuly"})

    }catch(err){
        
        res.status(400).send(err.message)
        }
})
//getAllProducts
router.get("/",async(req,res)=>{
    try{
      const allProducts=await Product.find({})
      res.send({allProducts})
    }catch(err){
        res.status(400).send(err.message)
    }
})
//get product by Id
router.get("/:id",async(req,res)=>{
    try{
      const oneProduct=await Product.findById(req.params.id)
      res.send({oneProduct})
      //console.log(req.params.id);
    }catch(err){
        res.status(400).send(err.message)
    }
})
//update product
router.put("/:id",async(req,res)=>{
    try{
      let updateProduct=await Product.updateOne({_id:req.params.id},{$set:{...req.body}})
      
      //updateProduct={...updateProduct,name:req.body.name} 
     // console.log(updateProduct);
     // await updateProduct.save()
      res.send({updateProduct})
    }catch(err){
        res.status(400).send(err.message)
    }
})

module.exports=router
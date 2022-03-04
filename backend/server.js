
const express=require ('express')
const app= express()
const product=require("./routes/routes_product")
require("dotenv").config()
app.use(express.json())
const connectDb=require("./config/concetdb")
connectDb()
//routes
app.use( "/product",product)


const port=process.env.PORT||5000
app.listen(5000,(err)=>{
err?console.log(err):console.log(`server is run http://localhost:${port}`)
 })
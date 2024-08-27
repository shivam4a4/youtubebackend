// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import {DB_name} from "./constants";
// import express from "express"
import connectdb from "./db/index.js";
dotenv.config({
    path:'.env'
})
connectdb()
.then(()=>{
    app.listen(process.env.PORT ||8000,()=>{
        console.log(`server is running at port :${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("mongodb connection failed",err)
})
/*
const app= express()
(async ()=>{
    try{
        await mongoose.connect(`${process.env.Mongodb}/${DB_name}`)
        app.on("error",(error)=>{
            console.log("error:",error)y
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app is listing on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.error("error:",error)
        throw error
    }
})()
*/

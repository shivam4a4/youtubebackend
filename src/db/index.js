import mongoose from "mongoose";
import { DB_name } from "../constants.js";
const connectdb = async() =>{
    try{
         const conncetioninstance =  await mongoose.connect(`${process.env.Mongodb_uri}/${DB_name}`)
         console.log(`mongodb connection ${conncetioninstance.connection.host}`)
    }
    catch(error){
        console.log("mongodb connection failed",error);
        process.exit(1)
    }
}
export default connectdb
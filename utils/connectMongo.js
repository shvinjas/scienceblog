import mongoose from "mongoose";

const connectMongo=async()=>mongoose.connect("mongodb+srv://shvinjas:PUjZrublQTrpo6EW@cluster0.bpmkupr.mongodb.net/nextjs_scienceblog?retryWrites=true&w=majority&appName=Cluster0")


export default connectMongo;
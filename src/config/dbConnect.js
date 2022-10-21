import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://smartgames:123@cluster0.smpcajj.mongodb.net/smartgames"
);

let db = mongoose.connection;

export default db;

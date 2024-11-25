import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
    },
    image : {
        type : String,
    }
},{
    timestamps : true,
})

const Categorymodel = mongoose.Schema("category", categorySchema);

export default Categorymodel;
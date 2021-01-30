import mongoose from 'mongoose';

const fruitsSchema = mongoose.Schema({
    creatorName: String,
    name: String,
    recomendation: String
})

const Fruits = mongoose.model("fruitContent", fruitsSchema)
export default Fruits
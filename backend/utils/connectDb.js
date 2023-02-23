const mongoose = require("mongoose")
mongoose.set('strictQuery', true)
const connectdb = async () => {
    const con = await mongoose.connect("mongodb+srv://fawad:fawad@cluster0.aqxoz1g.mongodb.net/todoMern?retryWrites=true&w=majority", {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("DB CONNECTED")

}

module.exports = connectdb
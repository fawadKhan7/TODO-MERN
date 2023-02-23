const express = require("express")
const app = express()
const todoRoutes = require("./routes/todoRoutes")
const connectDB = require("./utils/connectDb");


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept")
    res.setHeader("Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTIONS")
    next()
})


app.use(express.json());
app.use("/todo", todoRoutes)

connectDB()
app.listen(3000, () => { console.log("Running Backend") })

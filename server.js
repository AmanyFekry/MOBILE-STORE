const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")
const routes = require("./routes/index.route")
const morgan = require("morgan")


// Database connection 
function dbConnection()
{
    const url = process.env.DB_URL 
    mongoose.connect(url) .then(() =>
    {
        console.log('Database connected successfully!! ')
    })
        .catch((err) =>
        {
            console.error(err);
            console.log ("DB Not Connected!!")
        })
}
app.use(morgan("start"))
app.use(express.json())
app.use("/api", routes)


app.all("*", (req, res) =>
{
    res.status(400).send({message})
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () =>
{
    dbConnection( )
    console.log(`server is running ${PORT}`)
})
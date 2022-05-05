const express = require("express");
const dotenv = require("dotenv").config()
const errHandler = require("./middleware/errorMiddleware")

const goalsRoute = require("./routes/goals");

const port = process.env.PORT || 5000;

const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/goals", goalsRoute);

app.use(errHandler.errorMiddleware)

app.listen(port,() => {
    console.log(`Server just started on PORT ${port}`)
})


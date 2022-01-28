const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use((req,res,next)=>{
    console.log(`${req.method} request to ${req.url}`)
    next();
})

const joeMiddleWare= (req,res,next)=>{
    console.log("joe is here!")
    console.log("=======")
    const coinFlip = Math.floor(Math.random()*2);
    if(coinFlip){
        res.status(500).send("oh no the coin flip lost!")
    } else {
        next()
    }
}

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.send("homepage")
})

app.get('/about',joeMiddleWare,(req,res)=>{
    res.send("about page")
})

app.post("/",(req,res)=>{
    res.send("posted!")
})

app.listen(PORT,()=>{
    console.log(`listenin on port ${PORT}`)
})


import express from "express"

const app = express();
const port = 9000;
app.use("/",(req,res)=>{
    res.json({message:"Hello grom Express"});

})
app.listen(9000,()=>{
    console.log('starting server on port 9000')
})
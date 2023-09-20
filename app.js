import express from "express";

const app = express();

app.use(express.urlencoded());
app.use(express.json());

// console.log("Hellow from AWS");

app.use('/', (req,res) => {
    return res.status(200).json({ message: "Hellow from AWS" });
})

app.listen(3001);
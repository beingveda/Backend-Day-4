const express = require("express");
const noteModel = require("./models/note.model")

const app = express();
app.use(express.json());

app.post("/notes", async(req,res)=>{

    const data = req.body;
   await  noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: "Note Created"
    })

})

app.get("/notes", async(req,res)=>{
    const notes = await noteModel.find()//returns an array

    res.status(200).json({
        message: "Notes Fetched Successfully",
        notes: notes
    })
})

app.delete("/notes/:id",async (req,res) =>{

    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id: id
    })

    res.status(200).json({
        message: "Note Deleted successfully"
    })





})



app.patch("/notes/:id", async(req,res)=>{
    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({_id:id},{description:description})

    res.status(200).json({
        message:"Note Deleted successfully"
    })
    
})


module.exports = app;
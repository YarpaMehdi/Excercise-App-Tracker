const noteModel = require('../models/note')

const createNote = async (req,res) =>{
    console.log(req.userId)
    const {name,discription,activity,duration,date} = req.body;
    const newNote = new noteModel ({
        name:name,
        discription:discription,
        activity:activity,
        duration:duration,
        date:date,
        userId:req.userId
    });
    try {
        await newNote.save();
        res.status(201).json(newNote)
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({message:"Something Went Wrong"})
    }
}

const updateNote = async (req,res) =>{
    const id = req.params.id;
    const {name,discription,activity,duration,date} = req.body;
    const newNote = {
        name:name,
        discription:discription,
        activity:activity,
        duration:duration,
        date:date,
        userId:req.userId
    };
    try {
        await noteModel.findByIdAndUpdate(id,newNote,{new:true});
        res.status(200).json(newNote)    
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({message:"Something Went Wrong"})
    }
}

const deleteNote =async (req,res) =>{
    const id = req.params.id;
    try {
        const note = await noteModel.findByIdAndRemove(id)    
        res.status(202).json(note) // 202 means your request is accepted 
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({message:"Something Went Wrong"})
    }

}

const getNote = async (req,res) =>{
    try {
        const notes = await noteModel.find({userId:req.userId})    
        res.status(200).json(notes)
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({message:"Something Went Wrong"})
    }
}

module.exports = {createNote,updateNote,deleteNote,getNote}
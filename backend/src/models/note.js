const mongoose = require('mongoose')

const NoteSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    activity:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
},{timestamps:true})

module.exports = mongoose.model('Note',NoteSchema)
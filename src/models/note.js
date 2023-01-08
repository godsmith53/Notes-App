const mongoose=require('mongoose');

const noteSchema=mongoose.Schema({
    id:{
        type: 'string',
        unique: true,
        required: true
    },
    userid:{
        type: 'string',
        required: true
    },
    title:{
        type: 'string',
        required: true
    },
    content:{
        type: 'string',
    },
    dateAdded:{
        type:'date',
        default: Date.now,
    }
})

module.exports=mongoose.model('Note', noteSchema)
const { Schema } = require('mongoose');



const t_user = new Schema({
    f_Id: {
        type: String,
        required: true
    },
    f_Name: {
        type: String,
        required: true
    },
    f_Email: {
        type: String,
        required: true
    },
    f_Mobile: {
        type: Number,
        required: true
    },
    f_Designation: {
        type: String,
        required: true
    },
    f_gender: {
        type: String,
        required: true
    },
    f_Course: {
        type: String,
        required: true
    },
    f_Createdate: Object,
})

module.exports = t_user;
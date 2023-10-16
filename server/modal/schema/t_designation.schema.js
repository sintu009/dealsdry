const { Schema } = require('mongoose');


// t_designation
// t_designationname, f_crdate


const t_designation = new Schema({


    t_designationname: {
        type: String,
        required: true
    },
    f_crdate: {
        type: String,
        required: true
    },
})
module.exports = t_designation;
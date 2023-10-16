const { Schema } = require('mongoose');


// t_login
// f_sno, f_userName, f_Pwd


const t_login = new Schema({


    f_sno: {
        type: String,
        required: true
    },
    f_userName: {
        type: String,
        required: true
    },
    f_Pwd: {
        type: String,
        required: true
    },
})
module.exports = t_login;
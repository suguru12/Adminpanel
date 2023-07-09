const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    student_name: {type: String, required: true, min: 15, unique: true},
    dob: {type:  Date, required: true},
    course_name: {type: String, required: true, min: 15, unique: true},
    mobile_number: {type: Number, required: true, min: 15, unique: true},
    certificate_number: {type: String, required: true, min: 15, unique: true},
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;
const mongoose = require('mongoose');
let userSchema = mongoose.Schema({
   email: {
      type: String,
      required: [true, 'Email Harus Diisi!']
   },
   name: {
      type: String,
      required: [true, 'Nama Harus Diisi!']
   },
   password: {
      type: String,
      required: [true, 'Password Harus Diisi!']
   },
   phoneNumber: {
      type: String,
      required: [true, 'Nomor Telepon Harus Diisi!']
   },
   role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'admin'
   },
   status: {
      type: String,
      enum: ['Y', 'N'],
      default: 'Y'
   }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema);
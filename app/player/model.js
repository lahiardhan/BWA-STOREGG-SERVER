const mongoose = require('mongoose');
const brcypt = require('bcryptjs');

const HASH_ROUND = 10;

let playerSchema = mongoose.Schema({
   email: {
      type: String,
      required: [true, 'Email Harus Diisi!']
   },
   name: {
      type: String,
      required: [true, 'Nama Harus Diisi!'],
      maxlength: [225, 'Panjang Nama Harus Sepanjang 3-225 Karakter'],
      minlength: [3, 'Panjang Nama Harus Sepanjang 3-225 Karakter']
   },
   username: {
      type: String,
      required: [true, 'Username Harus Diisi!'],
      maxlength: [225, 'Panjang Nama Harus Sepanjang 3-225 Karakter'],
      minlength: [3, 'Panjang Nama Harus Sepanjang 3-225 Karakter']
   },
   password: {
      type: String,
      required: [true, 'Password Harus Diisi!'],
      maxlength: [225, 'Panjang Password Minimal Sepanjang 8-225 Karakter'],
      minlength: [8, 'Panjang Password Minimal Sepanjang 8-225 Karakter'],
   },
   role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user'
   },
   status: {
      type: String,
      enum: ['Y', 'N'],
      default: 'Y'
   },
   avatar: {type: String},
   fileName: {type: String},
   phoneNumber: {
      type: String,
      required: [true, 'Nomor Telepon Harus Diisi!'],
      maxlength: [13, 'Panjang Nomor Telepon Minimal Sepanjang 9-13 Karakter'],
      minlength: [9, 'Panjang Nomor Telepon Minimal Sepanjang 9-13 Karakter'],
   }, 
   favorite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
   }
}, { timestamps: true })

playerSchema.path('email').validate(async function (value) {
   try {
      const count = await this.model('Player').countDocuments({ email : value })
      return !count;
   } catch (err) {
      throw err
   }
}, attr => `${attr.value} sudah terdaftar`)

playerSchema.pre('save', function (next) {
   this.password = brcypt.hashSync(this.password, HASH_ROUND)
   next()
})

module.exports = mongoose.model('Player', playerSchema);
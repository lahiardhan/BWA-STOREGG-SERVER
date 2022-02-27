const mongoose = require('mongoose');
let bankSchema = mongoose.Schema({
   name: {
      type: String,
      required: [true, 'Nama Pemilik Harus Diisi!']
   },
   
   bankName: {
      type: String,
      required: [true, 'Nama Bank Harus Diisi!']
   },
   
   noRekening: {
      type: String,
      required: [true, 'No Rekening Bank Harus Diisi!']
   }
   
}, { timestamps: true })

module.exports = mongoose.model('Bank', bankSchema);
const mongoose = require('mongoose');
let voucherSchema = mongoose.Schema({
   name: {
      type: String,
      required: [true, 'Nama Game Harus Diisi!']
   },
   
   status: {
      type: String,
      enum: ['Y', 'N'],       // Y : active, N : non-active
      default: 'Y'
   },

   thumbnail: {
      type: String,
   },

   category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
   },
   
   nominals: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Nominal'
   }],

   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   }
})

module.exports = mongoose.model('Voucher', voucherSchema);
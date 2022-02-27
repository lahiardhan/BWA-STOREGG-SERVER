const mongoose = require('mongoose');
let transactionSchema = mongoose.Schema({
   historyVoucherTopup: {
      gameName: { type: String, required: [true, 'Name Game Harus Diisi!'] },
      category: { type: String, required: [true, 'Katgori Harus Diisi!'] },
      thumbnail: { type: String },
      coinName: { type: String, required: [true, 'Name Koin Harus Diisi!'] },
      coinQuantity: { type: String, required: [true, 'Jumlah Koin Harus Diisi!'] },
      price: { type: Number },
   },
   historyPayment: {
      name: { type: String, required: [true, 'Nama Harus Diisi!'] },
      type: { type: String, required: [true, 'Tipe/Jenis Pembayaran Harus Diisi!'] },
      bankName: { type: String, required: [true, 'Nama Bank Harus Diisi!'] },
      noRekening: { type: String, required: [true, 'Nomor Rekening Harus Diisi!'] },
   },
   name: {
      type: String,
      required: [true, 'Nama User Harus Diisi!'],
      maxlength: [225, 'Panjang Nama Harus Sepanjang 3-225 Karakter'],
      minlength: [3, 'Panjang Nama Harus Sepanjang 3-225 Karakter']
   },
   accountUser: {
      type: String,
      required: [true, 'Nama Akun User Harus Diisi!'],
      maxlength: [225, 'Panjang Nama Harus Sepanjang 3-225 Karakter'],
      minlength: [3, 'Panjang Nama Harus Sepanjang 3-225 Karakter']
   },
   tax: {
      type: Number,
      default: 0,
   },
   value: {
      type: Number,
      default: 0,
   },
   status: {
      type: String,
      enum: ['pending', 'success', 'failed'],
      default: 'pending'
   },
   player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Player'
   },
   category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   },
   historyUser: {
      name: { type: String, required: [true, 'Nama Player Harus Diisi'] },
      phoneNumber: {
         type: Number,
         required: [true, 'Nomor Telepon Harus Diisi!'],
         maxlength: [13, 'Panjang Nama Harus Sepanjang 9-13 Karakter'],
         minlength: [9, 'Panjang Nama Harus Sepanjang 9-13 Karakter']
      },
   },
}, { timestamps: true })

module.exports = mongoose.model('Transaction', transactionSchema);
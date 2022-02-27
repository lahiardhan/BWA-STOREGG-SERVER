const Category = require('./model');

module.exports = {
   index: async (req, res) => {
      try {
         const alertMessage = req.flash('alertMessage');
         const alertStatus = req.flash('alertStatus');

         const alert = { message: alertMessage, status: alertStatus }
         const category = await Category.find();

         console.log('------------SESSION USER------------')
         console.log(req.session.user)
         res.render('admin/category/view_category', {
            category, 
            alert,
            name: req.session.user.name,
            title: 'Halaman Kategori'
         })
      } catch (err) {
         req.flash('alertMessage', `${err.message}`);
         req.flash('alertStatus', 'danger');
         res.redirect('/category');
      }
   },

   viewCreate : async(req, res) => {
      try {
         res.render('admin/category/create', {
            name: req.session.user.name,
            title: 'Halaman Tambah Kategori'
         })
      } catch (err) {
         req.flash('alertMessage', `${err.message}`);
         req.flash('alertStatus', 'danger');
         res.redirect('/category');
      }
   },

   actionCreate : async(req, res) => {
      try {
         const {name} = req.body

         let category = await Category({ name })
         await category.save();

         req.flash('alertMessage', 'Kategori Berhasil Ditambahkan!');
         req.flash('alertStatus', 'success');
         
         res.redirect('/category');

      } catch (err) {
         req.flash('alertMessage', `${err.message}`);
         req.flash('alertStatus', 'danger');
         res.redirect('/category');      
      }
   },
   
   viewEdit : async(req, res) => {
      try {
         const {id} = req.params;
         const category = await Category.findOne({ _id : id })

         res.render('admin/category/edit', {
            category,
            name: req.session.user.name,
            title: 'Halaman Edit Kategori'
         })
      } catch (err) {
         req.flash('alertMessage', `${err.message}`);
         req.flash('alertStatus', 'danger');
         res.redirect('/category');      
      }
   },

   actionEdit : async(req,res) => {
      try {
         const {id} = req.params;
         const {name} = req.body;
         await Category.findOneAndUpdate({
            _id: id
         }, { name });

         req.flash('alertMessage', 'Kategori Berhasil Diperbarui!');
         req.flash('alertStatus', 'success');
         
         res.redirect('/category')
      } catch (err) {
         req.flash('alertMessage', `${err.message}`);
         req.flash('alertStatus', 'danger');
         res.redirect('/category');      
      }
   },

   actionDelete : async (req,res) => {
      try {
         const { id } = req.params;
         await Category.findOneAndRemove({
            _id: id
         });

         req.flash('alertMessage', 'Kategori Berhasil Dihapus!');
         req.flash('alertStatus', 'success');

         res.redirect('/category');      
      } catch (err) {
         req.flash('alertMessage', `${err.message}`);
         req.flash('alertStatus', 'danger');
         res.redirect('/category');      
      }
   }
}
// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Khởi tạo ứng dụng Express
const app = express();
app.use(cors());
app.use(express.json());

// Kết nối đến MongoDB
mongoose.connect(process.env.MONGODB_URI || 'YOUR_MONGODB_URI', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error: ', err));

// Định nghĩa schema cho sản phẩm
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true }
});

// Tạo model cho sản phẩm
const Product = mongoose.model('Product', productSchema);

// Endpoint để lấy danh sách sản phẩm
app.get('/api/products', async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const products = await Product.find()
                                  .limit(limit * 1)
                                  .skip((page - 1) * limit);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err });
  }
});

// Endpoint để thêm sản phẩm mới
app.post('/api/products', async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const validationError = newProduct.validateSync();
    if (validationError) {
      return res.status(400).json(validationError.errors);
    }
    await newProduct.save();
    res.json(newProduct);
  } catch (err) {
    res.status(500).json({ message: 'Error adding product', error: err });
  }
});

// Endpoint để cập nhật sản phẩm
app.put('/api/products/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: 'Error updating product', error: err });
  }
});

// Endpoint để xóa sản phẩm
app.delete('/api/products/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting product', error: err });
  }
});

// Khởi chạy server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

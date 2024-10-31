import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import { createSampleProduct } from './controllers/productController.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    console.log('📦 Connected to MongoDB');

    // Crear producto de muestra, eliminar
    const product = await createSampleProduct();
    console.log('🎲 Sample product created:', product);

    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  } catch (error) {
    console.error('❌ Server error:', error);
    process.exit(1);
  }
};

startServer();

process.on('unhandledRejection', (err) => {
  console.error('❌ Unhandled Rejection:', err);
  process.exit(1);
});

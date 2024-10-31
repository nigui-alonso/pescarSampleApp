import { fetchProducts } from './api.js';

async function displayProducts() {
  try {
    const productsGrid = document.getElementById('products-grid');
    const products = await fetchProducts();
    console.log('🎲 Products list', products);

    productsGrid.innerHTML = products
      .map(
        (product) => `
        <div class="product-card">
          <img class="product-image" src="${product.imageUrl}" alt="${product.name}">
          <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
          </div>
        </div>
      `
      )
      .join('');
  } catch (error) {
    console.error('Error displaying products:', error);
  }
}

document.addEventListener('DOMContentLoaded', displayProducts);

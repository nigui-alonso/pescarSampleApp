const API_URL = 'http://localhost:5001/api';

export async function fetchProducts() {
  try {
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();
    console.log('📦 Response from server', data);
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

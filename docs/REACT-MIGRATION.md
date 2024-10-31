# Guía de Migración a React

## Preparación

1. Crea una nueva aplicación React:

```bash
npx create-react-app client-react
cd client-react
```

2. Instala dependencias necesarias:

```bash
npm install react-router-dom axios
```

3. Configurar scripts en package.json

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "lint": "eslint src",
  "format": "prettier --write src/**/*.{js,jsx,css}"

}
```

## Estructura de Carpetas Sugerida

```
src/
├── components/
│   ├── common/
│   │   ├── Navbar.jsx
│   │   ├── Button.jsx
│   │   └── Card.jsx
│   ├── home/
│   │   ├── HeroSection.jsx
│   │   └── AboutUs.jsx
│   └── products/
│       ├── ProductGrid.jsx
│       └── ProductCard.jsx
├── pages/
│   ├── Home.jsx
│   └── Products.jsx
├── services/
│   └── api.js
├── context/
│   └── CartContext.jsx
├── hooks/
│   └── useProducts.js
├── styles/
│   └── globals.js
└── utils/
    └── helpers.js
```

## Migración Paso a Paso

### 1. Configuración de Rutas

```jsx
// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { CartProvider } from "./context/CartContext";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyles />
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  );
}

// src/routes.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
}
```

### 2. Migración de Componentes

```jsx
// components/common/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Mi Tienda</Link>
      </div>
      <div className="cart-icon">
        🛒 <span>{cartCount}</span>
      </div>
    </nav>
  );
}

// src/pages/Products/Products.jsx
import { useProducts } from "../../hooks/useProducts";
import ProductGrid from "../../components/products/ProductGrid";
import LoadingSpinner from "../../components/common/LoadingSpinner";

export default function Products() {
  const { products, loading, error } = useProducts();

  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Nuestros Productos</h1>
      <ProductGrid products={products} />
    </div>
  );
}
```

### 3. Estado Global (Context API o alguna librería similar)

```jsx
// context/CartContext.jsx
import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
```

### 4. Custom Hooks

```jsx
// src/hooks/useProducts.js
import { useState, useEffect } from "react";
import { getProducts } from "../services/api";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}
```

### 5. Servicios API

```jsx
// services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};
```

### 6. Estilos

Opción 1 - Styled Components:

```jsx
// styles/globals.js
import styled from "styled-components";

export const Button = styled.button`
  background: var(--primary-color);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
```

Opción 2 - CSS Modules:

```css
/* styles/Button.module.css */
.button {
  background: var(--primary-color);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
```

### 7. Variables de Entorno

```env
REACT_APP_API_URL=http://localhost:5001/api
```

## Migración Gradual

1. Comienza con componentes pequeños y aislados
2. Migra página por página
3. Mantén ambas versiones funcionando en paralelo
4. Usa feature flags para cambiar entre versiones

Que es una feature flag?

Es una variable que se puede cambiar en tiempo de ejecución para controlar el comportamiento de una aplicación.

Ejemplo de feature flag sobre la pagina de productos:

```jsx
const ShowProducts = true;
```

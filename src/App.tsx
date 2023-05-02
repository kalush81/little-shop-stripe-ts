import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/ui/layout';
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Products from './components/pages/products';
import Cart from './components/pages/cart';

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/products" element={<Products collection="products" />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

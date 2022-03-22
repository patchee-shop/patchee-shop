import './App.css'
import Cart from './components/pages/Cart'
import Catalog from './components/pages/Catalog'
import Tabs from './components/elements/Tabs'
import ProductInfo from './components/pages/ProductInfo'
import Categories from './components/pages/Categories'
import { Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route exact path="/catalog/:filter" element={<Catalog />} />
        <Route path="/product_info/:id" element={<ProductInfo />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Tabs />
    </div>
  );
}

export default App;

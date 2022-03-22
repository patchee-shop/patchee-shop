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
        <Route path={process.env.PUBLIC_URL + "/"} element={<Categories />} />
        <Route exact path={process.env.PUBLIC_URL + "/catalog/:filter"} element={<Catalog />} />
        <Route path={process.env.PUBLIC_URL + "/product_info/:id"} element={<ProductInfo />} />
        <Route path={process.env.PUBLIC_URL + "/cart"} element={<Cart />} />
      </Routes>
      <Tabs />
    </div>
  );
}

export default App;

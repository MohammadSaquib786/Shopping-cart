import './App.css';
import CartDetail from './components/cartDetail/CartDetail';
import Navbar from './components/navbar/Navbar';
import ProductList from './components/productList/ProductList';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={ <ProductList/>}/>
        <Route path='/cartdetail' element={<CartDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;

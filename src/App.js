import {Routes, Route} from 'react-router-dom'
import Home from './components/pages/1Landing';
import Products from './components/pages/2Products';
import Cart from './components/pages/3Cart';
import './App.css';
import Navbar from './components/features/0Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;

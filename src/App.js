import './App.css';
import Home from './pages/Home.jsx';
import MenShoes from './pages/MenShoes.jsx';
import MenSocks from './pages/MenSocks.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import WomenShoes from './pages/WomenShoes'
import Shoe1 from './pages/Shoe1';
import Shoe2 from './pages/Shoe2';
import Shoe3 from './pages/Shoe3';
import Shoe4 from './pages/Shoe4';
import Sock1 from './pages/Sock1';
import Sock2 from './pages/Sock2';
import Sock3 from './pages/Sock3';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menShoes' element={<MenShoes />} />
            <Route path='/socks' element={<MenSocks />} />
            <Route path='/womenShoes' element={<WomenShoes />} />
            <Route path='/NikeModel1' element={<Shoe1 />} />
            <Route path='/NikeModel2' element={<Shoe2 />} />
            <Route path='/NikeModel3' element={<Shoe3 />} />
            <Route path='/NikeModel4' element={<Shoe4 />} />
            <Route path='/SocksModel1' element={<Sock1 />} />
            <Route path='/SocksModel2' element={<Sock2 />} />
            <Route path='/SocksModel3' element={<Sock3 />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

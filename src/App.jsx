import React from 'react' 
import { Routes , Route} from 'react-router-dom';

import HomePage from './pages/homepage/homePage.component';
import ShopPage from './pages/shoppage/shop.component';

import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/shop' element={<ShopPage/>}/>
    </Routes>
  );
}

export default App;
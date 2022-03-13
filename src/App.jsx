import React from 'react' 
import { Routes , Route} from 'react-router-dom';

import HomePage from './pages/homepage/homePage.component';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';
import './App.css'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
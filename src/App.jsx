import React from 'react' 
import { Routes , Route} from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homePage.component';
import ShopPage from './pages/shoppage/shop.component';
import SignINandUpPage from './pages/signingpage/signing.component'; 

import './App.css'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path='/signin' element={<SignINandUpPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
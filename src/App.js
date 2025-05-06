import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import SideBar from './components/Sidebar/SideBar';
import Cart from './components/Cart/Cart';
import ShoppingList from './components/ShoppingList/ShoppingList'

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="App">
              <div className="AppGlass">
                <SideBar/>
                <MainDash/>
                <RightSide/>
              </div>        
            </div>
          } 
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shoppingList" element={<ShoppingList/>}/>
      </Routes>
    </Router>
  );
}

export default App;
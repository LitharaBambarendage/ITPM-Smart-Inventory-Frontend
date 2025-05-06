import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from '../Sidebar/SideBar';
import List from './List';
import './ShoppingList.css';


const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="AppGlass">
        <SideBar />
        <div className="list-content">
          <button 
              onClick={() => navigate('/generate')} 
              style={{
                  position: 'absolute',
                  marginLeft: '600px',
                  marginTop: '40px',
                  padding: '10px 15px',
                  backgroundColor: '#e88a10ea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
                  fontSize:'15px'
              }}
          >
              Generate
          </button>

          <button 
              onClick={() => navigate('/new')} 
              style={{
                  position: 'absolute',
                  marginLeft: '490px',
                  marginTop: '40px',
                  padding: '10px 15px',
                  backgroundColor: '#e88a10ea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
                  fontSize:'15px'
              }}
          >
              + Add New
          </button>
          <div className="cart-items">  
            <List/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
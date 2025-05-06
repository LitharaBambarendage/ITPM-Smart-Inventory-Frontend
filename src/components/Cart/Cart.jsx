import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from '../Sidebar/SideBar';
import RightSide from '../RightSide/RightSide';
import PredictTable from './PredictTable';
import RecommondTable from './RecommondTable';

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="AppGlass">
        <SideBar />
        <div className="cart-content">
          <h1>My Cart</h1>
          <button 
              onClick={() => navigate('/shoppingList')} 
              style={{
                  position: 'absolute',
                  marginLeft: '450px',
                  marginTop: '-20px',
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
              Generate Shopping List
          </button>

          <div className="cart-items">
            
            <PredictTable/>
            <RecommondTable/>
            
          </div>
        </div>
        <RightSide />
      </div>
    </div>
  );
};

export default Cart;
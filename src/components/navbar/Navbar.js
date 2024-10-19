import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    const cart = useSelector((state) => state.cartReducer.cart);
    const navigate = useNavigate();
    let count = 0;
    cart.forEach((item) => (count+= item.quantity));
    console.log(cart)
  return (
    <div className='Navbar'>
      <h2>My Shop</h2>
      <div className='cart-detail'>
        <FaCartPlus style={{cursor:'pointer'}} onClick = {() => navigate('/cartdetail')} />
        <h3>{count}</h3>
      </div>
    </div>
  )
}

export default Navbar

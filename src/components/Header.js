import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header-container'>
      <h1>Lambda Eats</h1>
      <div className='header-nav'>
        <NavLink style={{ marginRight: 10 }} to='/'>
          Home
        </NavLink>
        <NavLink to='/pizza' id='order-pizza'>
          Order
        </NavLink>
      </div>
    </div>
  );
}

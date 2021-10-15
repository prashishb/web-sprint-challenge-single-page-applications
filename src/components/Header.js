import React from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
import Home from '../components/Home';
import Help from '../components/Help';

export default function Header() {
  return (
    <div className='header-container'>
      <h1>Lambda Eats</h1>
      <div className='header-nav'>
        <NavLink style={{ marginRight: 10 }} to='/'>
          Home
        </NavLink>
        <NavLink to='/order'>Order</NavLink>
      </div>
    </div>
  );
}

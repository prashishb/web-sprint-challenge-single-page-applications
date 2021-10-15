import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();

  const routeToOrder = () => {
    history.push('/pizza');
  };

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
        alt=''
      />
      <div className='home-image-contents'>
        <h2 className='hero-text'>
          Your favorite food, delivered while coding
        </h2>
        <button onClick={routeToOrder} className='order-btn'>
          Order Now
        </button>
      </div>
    </div>
  );
}

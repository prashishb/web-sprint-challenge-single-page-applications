import React from 'react';

export default function Confirmation(props) {
  const { order } = props;

  if (!order) {
    return <h3>Working fetching user order...</h3>;
  }

  console.log(order);
  return (
    <div className='order-container'>
      <h1 className='confirmation-title'>
        Congratulations Your Pizza is on it's way!
      </h1>
      <img
        src='https://giffiles.alphacoders.com/891/89192.gif'
        alt='cat delivering pizza'
      />
    </div>
  );
}

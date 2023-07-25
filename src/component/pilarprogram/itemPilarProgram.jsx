/* eslint-disable react/prop-types */
import React from 'react';

function ItemPilarProgram({ Image, title, description }) {
  return (
    <>
      <div className='item-program'>
        <div className='img-program'>
          <img src={Image} alt='' />
        </div>
        <div className='information'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default ItemPilarProgram;

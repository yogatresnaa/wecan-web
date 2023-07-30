/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

function ItemPilarProgram({ id, Image, title, description }) {
  return (
    <>
      <div className='item-program'>
        <Link to='/galeryprogram/' style={{ paddingLeft: 13, textDecoration: 'none' }}>
          <div className='img-program'>
            <img src={Image} alt='' />
          </div>
          <div className='information'>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ItemPilarProgram;

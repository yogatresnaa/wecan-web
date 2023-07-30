import React from 'react';
import { Link } from 'react-router-dom';

function ListItemProgram() {
  return (
    <>
      <div>
        <ul className='Galery'>
          <li>
            <img src='/images/mobilWeb.jpg' />
            <p>Program Bina Lansia</p>
          </li>
          <li>
            <img src='/images/mobilWeb2.jpg' />
            <p>Program Bina Generasi</p>
          </li>
          <li>
            <img src='/images/mobilWeb3.jpg' />
            <p>Kemanusiaan</p>
          </li>

          <li>
            <img src='/images/mobilWeb.jpg' />
            <p>Program Bina Lansia</p>
          </li>
          <li>
            <img src='/images/mobilWeb2.jpg' />
            <p>Program Bina Generasi</p>
          </li>
          <li>
            <img src='/images/mobilWeb3.jpg' />
            <p>Kemanusiaan</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ListItemProgram;

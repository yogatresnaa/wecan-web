import React from 'react';
import ListItemProgram from '../../component/ComponentProgram/ListItemGaleryProgram';

function PageGaleryProgram() {
  return (
    <>
      <div className='page-galery'>
        <div className='Galery-page'>
          <h1>DAFTAR PROGRAM BERGAGI</h1>
          <ListItemProgram />

          <div className='peta-distribusi-2019'>
            <img src='/images/distribusi.JPG' />
          </div>
        </div>
      </div>
    </>
  );
}

export default PageGaleryProgram;

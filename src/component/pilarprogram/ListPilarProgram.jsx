/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from 'react-multi-carousel';
import ItemPilarProgram from './itemPilarProgram';
import 'react-multi-carousel/lib/styles.css';

function ProgramCard({ pilarProgram }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 500, min: 200 },
      items: 2,
    },
  };

  const pilar = pilarProgram.map((item) => <ItemPilarProgram key={item.id} id={item.id} {...item} />);

  return (
    <>
      <div className='carousel'>
        <Carousel responsive={responsive}>{pilar}</Carousel>
      </div>
    </>
  );
}

export default ProgramCard;

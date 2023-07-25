import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function HeroImage() {
  return (
    <div className='hero'>
      <Carousel>
        <Carousel.Item>
          <img className='d-bloc w-100 ' src='/images/heroImage.jpg' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100 ' src='/images/heroImage2.jpg' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100 ' src='/images/heroImage3.jpg' />
        </Carousel.Item>

        <Carousel.Item>
          <img className='d-block w-100 ' src='/images/heroImage4.jpg' />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroImage;

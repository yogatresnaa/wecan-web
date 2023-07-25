import React from 'react';
import ItemBeritaProgram from './ItemBeritaProgram';
import Carousel from 'react-bootstrap/Carousel';

function ListBeritaProgram({ ListProgram }) {
  const List = ListProgram.map((item) => <ItemBeritaProgram key={item.id} id={item.id} {...item} />);
  return (
    <>
      <Carousel slide={false}>
        <Carousel.Item>{List}</Carousel.Item>
      </Carousel>
    </>
  );
}

export default ListBeritaProgram;

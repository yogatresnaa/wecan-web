import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ItemBeritaProgram({ props }) {
  return (
    <>
      <Carousel slide={false}>
        <Carousel.Item>
          <div className='berita'>
            <div className='image-berita'>
              <img src='/images/heroImage2.jpg' alt='First slide' />
            </div>

            <div className='info-narasi'>
              <h2>TEBAR MANFAAT QURBAN UNTUK NEGERI</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eligendi numquam dolorem atque. Harum culpa sed facere cumque? Quidem voluptates obcaecati aliquid animi optio eius perferendis ullam quasi assumenda,
                consectetur aut dolorum vel quis odit numquam voluptas tempora asperiores repellat labore a qui. Dolorum quas autem facilis, possimus similique hic?
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='berita'>
            <div className='image-berita'>
              <img src='/images/heroImage.jpg' alt='First slide' />
            </div>
            <div className='info-narasi'>
              <h2>PROGRAM BINA GENERASI</h2>
              <p>
                AKu ipsum dolor sit amet consectetur adipisicing elit. Labore eligendi numquam dolorem atque. Harum culpa sed facere cumque? Quidem voluptates obcaecati aliquid animi optio eius perferendis ullam quasi assumenda, consectetur
                aut dolorum vel quis odit numquam voluptas tempora asperiores repellat labore a qui. Dolorum quas autem facilis, possimus similique hic?
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

// function ItemBeritaProgram({ imageBerita, title, description }) {
//   return (
//     <>
//       <div className='berita'>
//         <div className='image-berita'>
//           <img src={imageBerita} />
//         </div>

//         <div className='info-narasi'>
//           <h2>{title}</h2>
//           <p>{description}</p>
//         </div>
//       </div>
//       <div className='berita'>
//         <div className='image-berita'>
//           <img src={imageBerita} alt='First slide' />
//         </div>
//         <div className='info-narasi'>
//           <h2>{title}</h2>
//           <p>{description}</p>
//         </div>
//       </div>
//     </>
//   );
// }

export default ItemBeritaProgram;

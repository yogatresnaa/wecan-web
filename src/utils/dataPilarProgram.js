let dataPilarProgram = [
  {
    id: '1',
    Image: '/images/heroImage3.jpg',
    title: 'KESEHATAN',
    description: 'Program Bina Sehati',
  },

  {
    id: '2',
    Image: '/images/heroImage.jpg',
    title: 'PENDIDIKAN',
    description: 'Program Bina Generasi',
  },

  {
    id: '3',
    Image: '/images/heroImage5.jpg',
    title: 'KEMANUSIAAN',
    description: 'Tanggan Bencana',
  },

  {
    id: '4',
    Image: '/images/heroImage6.jpg',
    title: 'LINGKUNGAN',
    description: 'Bina Lestari',
  },

  {
    id: '5',
    Image: '/images/heroImage2.jpg',
    title: 'QURBAN',
    description: 'Qurban Peduli',
  },
];

let dataBeritaProgram = [
  {
    id: '1',
    imageBerita: '/images/heroImage.jpg',
    title: 'Giat Aksi Wecan Chapter Kalbar',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil, totam, dolor quasi expedita a harum est dolores laudantium, architecto velit optio. At quibusdam magnam possimus provident soluta, ipsa fugiat quos iste harum quam nemo recusandae? Maiores saepe obcaecati dicta, aspernatur provident libero itaque at fuga suscipit quos dolore ex!',
  },

  {
    id: '2',
    imageBerita: '/images/heroImage2.jpg',
    title: 'Pondok Madani',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil, totam, dolor quasi expedita a harum est dolores laudantium, architecto velit optio. At quibusdam magnam possimus provident soluta, ipsa fugiat quos iste harum quam nemo recusandae? Maiores saepe obcaecati dicta, aspernatur provident libero itaque at fuga suscipit quos dolore ex!',
  },

  {
    id: '3',
    imageBerita: '/images/heroImage3.jpg',
    title: 'Pelatihan Life Skill',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil, totam, dolor quasi expedita a harum est dolores laudantium, architecto velit optio. At quibusdam magnam possimus provident soluta, ipsa fugiat quos iste harum quam nemo recusandae? Maiores saepe obcaecati dicta, aspernatur provident libero itaque at fuga suscipit quos dolore ex!',
  },
];

function CardPilarProgram() {
  return dataPilarProgram;
}

function BeritaProgram() {
  return dataBeritaProgram;
}

function getProgram(id) {
  if (!id) {
    return null;
  }

  const filteredPrograms = dataPilarProgram.filter((prog) => prog.id === id);

  if (!filteredPrograms.length) {
    return null;
  }

  return filteredPrograms[0];
}

export { CardPilarProgram, BeritaProgram, getProgram };

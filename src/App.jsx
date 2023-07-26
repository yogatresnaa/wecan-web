import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderNavigation from '../src/component/header';
import Footer from '../src/component/footer';

// homepage
import HomePage from '../src/pages/home/HomePage';

// Program
import PageBinaGenerasi from './pages/PagePraogram/BinaGenerasi';
import PageBinaSehati from './pages/PagePraogram/BinaSehati';
import PageBinaLestari from './pages/PagePraogram/BinaLestariPage';
import PageTanggapBencana from './pages/PagePraogram/TanggapBencana';
import PageQurban from './pages/PagePraogram/PageQurban';

// css
import '../src/styles/style.css';

function App() {
  return (
    <div className='app'>
      <header>
        <HeaderNavigation />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/binasehati' element={<PageBinaSehati />} />
          <Route path='/binagenerasi' element={<PageBinaGenerasi />} />
          <Route path='/binalestari' element={<PageBinaLestari />} />
          <Route path='/tanggapbencana' element={<PageTanggapBencana />} />
          <Route path='/qurban' element={<PageQurban />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

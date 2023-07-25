import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderNavigation from '../src/component/header';
import Footer from '../src/component/footer';

// homepage
import HomePage from '../src/pages/home/HomePage';

// css
import '../src/styles/style.css';

function App() {
  return (
    <div className='app'>
      <header>
        <HeaderNavigation />
      </header>
      <main>
        <HomePage />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

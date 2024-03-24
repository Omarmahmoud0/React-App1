import React from 'react';
import About from './About';
import Footer from './Footer';
import Title from './Title';
import Card from './Card';
import Contect from './Contect';
import Carousel from './Carousel';

function App() {
  return (
    <>
      <div>
        <About />
      </div>
      <div>
        <Title />
      </div>
      <div>
        <Carousel/>
      </div>
      <div>
        <Card/>
      </div>
      <div>
        <Contect/>
      </div>
      <div>
        <Footer/>
      </div>
      
    </>
  );
}

export default App;

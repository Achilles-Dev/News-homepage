import React from 'react';
import BottomSection from './components/BottomSection';
import Footer from './components/Footer';
import Header from './components/Header';
import MidSection from './components/MidSection';

const App = () => {
  return (
    <div className='main'>
      <Header />
      <MidSection />
      <BottomSection />
      <Footer />
    </div>
  )
}

export default App;
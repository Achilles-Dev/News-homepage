import React from 'react';
import BottomSection from './components/BottomSection';
import Header from './components/Header';
import MidSection from './components/MidSection';

const App = () => {
  return (
    <div className='main'>
      <Header />
      <MidSection />
      <BottomSection />
    </div>
  )
}

export default App;
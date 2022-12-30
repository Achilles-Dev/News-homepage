import React from 'react';
import Web3Desktop from '../../assets/images/image-web-3-desktop.jpg'

const MidSection = () => (
  <section className='main-mid'>
    <div className='left-mid'>
      <img src={Web3Desktop} alt='Web-3' />
      <div className='left-mid-bottom'>
        <h2>The Bright Future of Web 3.0?</h2>
        <div>
          <p>
            We dive into the next evolution of the web that claims to put the power of the platforms
            back into the hands of the people. But is it really fulfilling its promise?
          </p>
          <div>
            <button type='button'>READ MORE</button>
          </div>
        </div>
      </div>
    </div>
    <div className='right-mid'>
      <h2>New</h2>
      <div>
        <div className='card one'>
          <h3>Hydrogen VS Electric Cars</h3>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <div className='card two'>
          <h3>The Downsides of AI Artistry</h3>
          <p>What are the possible adverse effects of on-demand AI image generation?</p>
        </div>
        <div className='card three'>
          <h3>Is VC Funding Drying Up?</h3>
          <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
      </div>
    </div>
  </section>
);

export default MidSection;
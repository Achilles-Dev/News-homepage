import React from 'react';
import GamingImage from '../../assets/images/image-gaming-growth.jpg';
import RetroImage from '../../assets/images/image-retro-pcs.jpg';
import TopLapImage from '../../assets/images/image-top-laptops.jpg';

const  BottomSection = () => (
  <section className='bottom-section'>
    <div className='bottom-card'>
      <img src={RetroImage} alt="Retro Image" />
      <div className='bottom-card-info'>
        <h3>01</h3>
        <a href='#Reviving-Retro-PCs'>Reviving Retro PCs</a>
        <p>What happens when old PCs are given modern upgrades?</p>
      </div>
    </div>
    <div className='bottom-card'>
      <img src={TopLapImage} alt="Top Laptop Image" />
      <div className='bottom-card-info'>
        <h3>02</h3>
        <a href='#Top-10-Laptops-of-2022'>Top 10 Laptops of 2022</a>
        <p>Our best picks for various needs and budgets.</p>
      </div>
    </div>
    <div className='bottom-card'>
      <img src={GamingImage} alt="Gaming Image" />
      <div className='bottom-card-info'>
        <h3>03</h3>
        <a href='#The-Growth-of-Gaming'>The Growth of Gaming</a>
        <p>How the pandemic has sparked fresh opportunities.</p>
      </div>
    </div>
  </section>
);

export default BottomSection;
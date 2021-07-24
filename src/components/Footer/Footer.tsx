import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
      <h2>Address</h2>
      <div className='footer-map'>
        <iframe
          width='450'
          height='250'
          src="https://maps.google.com/maps?width=720&amp;height=400&amp;hl=en&amp;q=Arkhitektora%20Artynova%20St%2C%2024%2C%20Vinnytsia%2C%20Vinnyts'ka%20oblast%2C%2021000+(%D0%9D%D0%B0%D1%88%D0%B0%20%D0%90%D0%B4%D1%80%D0%B5%D1%81%D0%B0)&amp;ie=UTF8&amp;t=&amp;z=18&amp;iwloc=B&amp;output=embed"
          scrolling='no'
        >
          <a href='https://www.maps.ie/map-my-route/'>
            Create a route on google maps
          </a>
        </iframe>
      </div>
      <address className='footer-address'>
        <strong>Місцезнаходження: </strong>
        <br />
        м. Вінниця вул.
        <br />
        Архітектора Артинова, 24
        <br />
        67-34-00
        <br />
        67-26-71
        <br />
      </address>
      <p className='footer-title'> VinStomat 2021</p>
    </footer>
  );
};

export default Footer;

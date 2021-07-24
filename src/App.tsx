import React from 'react';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <h1>App</h1>
      <Footer />
    </div>
  );
};

export default App;

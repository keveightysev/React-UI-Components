import React from 'react';
import './App.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className="app">
    <div className="app-left">
      <ImageThumbnail />
    </div>
    <div className="app-right">
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </div>
    </div>
  );
};

export default App;

import React from 'react';


import Header from './Components/Header/';
import Footer from './Components/Footer/';
import Routes from './routes'
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;

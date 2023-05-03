import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import {GlobalStyles} from './components/main';


function App() {
  return (
    <BrowserRouter>
        <Header />
            <GlobalStyles />
                      <Routes></Routes>
          <Footer />           
    </BrowserRouter>
  );  
}
export default App;

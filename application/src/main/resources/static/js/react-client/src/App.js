import AppRouter from './Components/app-router';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/footer';
import Header from './Components/Header';
import React from 'react';

const App = () => {
  return (
    <div>
       <BrowserRouter>
      <Header />
      <div>
	   {/* Hello React Test World */}
        <AppRouter />
      </div>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
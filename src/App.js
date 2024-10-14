import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';


function App() { 
  
  return (
    <div className='app'>
      <Header />
      <div className='content-wrapper'>
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;

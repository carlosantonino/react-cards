import React from 'react';
import './App.css';
import Cards from './Cards/Cards';
import Footer from './Footer/footer';
import Header from './Header/header';


export default function App() {
  return(
    <div>
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}
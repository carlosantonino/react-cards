import React from 'react';
import './App.css';
import Cards from './Cards/Cards';
import Footer from './Footer/footer';
import Header from './Header/header';
import Title from './Title/title';


export default function App() {
  return(
    <div>
      <Header />
      <Title />
      <Cards />
      <Footer />
    </div>
  );
}
import React from 'react';
import Footer from '../footer';
import Navbar from '../navbar';

export default function Layout({ children }) {
  return <React.Fragment>
    <Navbar/>
    {children}
    <Footer/>
  </React.Fragment>;
}

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import Productlisting from './containers/Productlisting';
import Productdetails from './containers/Productdetails';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Productlisting/>} />
        <Route path="/product/:productId" element={<Productdetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

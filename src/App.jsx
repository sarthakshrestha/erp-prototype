import { useState } from 'react'

import './App.css'
import MainForm from './components/create-order/main-form'
import Dropdown from './components/links/linkset'
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import TokenOrder from './components/token-order/token-order';
import TestComp from './components/single-page/single-page';
import SinglePage from './components/single-page/single-page';


function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dropdown />} />
        <Route path="/order-item" element={<MainForm />} />
        <Route path="/token-order" element={<TokenOrder />} />
        <Route path="/test" element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

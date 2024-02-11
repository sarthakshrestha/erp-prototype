import { useState } from 'react'

import './App.css'
import MainForm from './components/create-order/main-form'
import Dropdown from './components/links/linkset'
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dropdown />} />
        <Route path="/order-item" element={<MainForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

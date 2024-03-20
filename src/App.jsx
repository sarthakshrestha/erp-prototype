import { useState } from 'react'

// import './App.css'
import MainForm from './components/create-order/main-form'
import Dropdown from './components/links/linkset'
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import TokenOrder from './components/token-order/token-order';

import JobCard from './components/test/job-card';
import SignIn from "@/components/sign-in/sign-in.jsx";
import VarForm from './components/var-form/varform';
import CostCalculation from './components/cost-calculation/costcalc';


function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dropdown />} />
          <Route path="/sign-in" element={<SignIn />} />
        <Route path="/order-item" element={<MainForm />} />
        <Route path="/token-order" element={<TokenOrder />} />
        <Route path="/test-job-card" element={<JobCard />} />
        <Route path="/var-form" element={<VarForm />} />
        <Route path="/cost-calc" element={<CostCalculation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Scp from './Components/SCP/Scp';
import New_entry from './Components/New_Entry/New_entry';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/scp" element={<Scp/>}/>
      <Route path="/new_entry" element={<New_entry/>}/>
      <Route path="/" element={<App />}/>
    </Routes>
    </BrowserRouter>
  

);



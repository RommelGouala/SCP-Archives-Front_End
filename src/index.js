import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Scp from './Components/SCP/Scp';
import NewEntry from './Components/New_Entry/New_entry';
import News from './Components/News/News';
import Edit from './Components/Edit/Edit';
import ScpDetails from './Components/SCP Details Page/Scp_details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/scp" element={<Scp />} />
      <Route path="/scp/:id" element={<ScpDetails/>}/>
      <Route path="/scp/:id/edit" element={<Edit/>} />
      <Route path="/new_entry" element={<NewEntry />} />
      <Route path="/news" element={<News/>} />
    </Routes>
  </BrowserRouter>


);



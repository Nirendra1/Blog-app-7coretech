import React from 'react';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Bloglist from './Components/BlogpostList/Bloglist';
import Blogdetail from './Components/BlogpostDetail/Blogdetail';
import './App.css';

const App = () => {

  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path="/" element={<Bloglist/>} />
        <Route path="/post/:id" element={<Blogdetail/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;




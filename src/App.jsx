import React from 'react';
import './App.css';
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import About from './components/About.jsx'
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className='App'>
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
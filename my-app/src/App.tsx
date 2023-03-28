import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Router from './components/Router';

function App() {
  return (
    <div className='min-h-screen flex flex-col h-screen'>
      <Navbar/>
      <div className='flex-1 flex flex-row'>

        <div className='bg-slate-400 w-1/3 overflow-y-aut'></div>
        <div className='bg-slate-200 flex-1 w-80'><Router/></div>
        <div className='bg-slate-400 w-1/3 overflow-y-aut'></div>
      </div>
    </div>
  );
}

export default App;

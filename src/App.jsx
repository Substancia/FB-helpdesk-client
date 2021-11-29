import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar, PrivateRoute } from './components';
import { Home, LinkedAccounts, Login } from './containers';

const App = () => {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<PrivateRoute component={Home} />} />
        <Route path='/linkedAccounts' element={<PrivateRoute component={LinkedAccounts} />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
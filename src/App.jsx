import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { LinkedAccounts, Login } from './containers';
import { accountService } from './services';

const App = () => {
  return (
    <div>
      App.jsx
      <Link to='/login'>Login</Link>
      <button onClick={accountService.logout}>Log out</button>
      <Routes>
        <Route path='/' element={<div>Home page</div>} />
        <Route path='/linkedAccounts' element={<LinkedAccounts />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
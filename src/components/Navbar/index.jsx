import React from "react";
import { Link } from "react-router-dom";
import { accountService } from "../../services";
import './index.css';

const Navbar = () =>
  <div className='Navbar'>
    Navbar

    {
      accountService.loggedIn() ?
      <button onClick={accountService.logout}>Log out</button> :
      <Link to='/login'>Login</Link>
    }
  </div>

export default Navbar
import React from "react";
import { accountService } from "../../services";

const Home = () => {
  var account = accountService.getAccount();
  if(account == null) account = { name: '', facebookId: '', extraInfo: '' };

  return (
    <div className='Home'>
      <div>
        <p>Name: {account.name}</p>
        <p>FB ID: {account.facebookId}</p>
        <p>ExtraInfo: {account.extraInfo}</p>
      </div>
    </div>
  );
}

export default Home;
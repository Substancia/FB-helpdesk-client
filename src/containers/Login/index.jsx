import React, { useEffect, useState } from "react";
import { accountService } from "../../services";
import { history } from "../../helpers";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if(accountService.loggedIn()) history('/');
  }, []);

  return (
    <div>
      <div>
        <h4>Login page</h4>
        <div>
          <div>
            <label htmlFor='username'>Username: </label>
            <input type='text' name='username' value={username}
              onChange={e => setUsername(e.target.value)}
            />

            <label htmlFor='password'>Password: </label>
            <input type='password' name='password' value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <button>Log in</button>
          </div>

          <div>
            <button onClick={accountService.login}>
              Login with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
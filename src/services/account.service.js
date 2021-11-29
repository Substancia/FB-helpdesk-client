import axios from "axios";
import { history } from '../helpers';

const baseUrl = process.env.REACT_APP_BE_ADDRESS + '/accounts';
var account = null;

const login = async () => {
  const { authResponse } = await new Promise(window.FB.login);
  if(!authResponse) return;

  await apiAuthenticate(authResponse.accessToken);
  history('/');
}

const apiAuthenticate = async (accessToken) => {
  await axios.post(baseUrl + '/authenticate', { accessToken })
    .then(res => {
      account = res.data;
      startAuthenticateTimer();
      console.log(account);
      return account;
    });
}

const logout = () => {
  window.FB.api('/me/permissions', 'delete', null, () => window.FB.logout());
  stopAuthenticateTimer();
  account = null;
  history('/login');
}

const getAll = () => {
  return axios.get(baseUrl).then(res => res.data);
}


let authenticateTimeout;

const startAuthenticateTimer = () => {
  const jwtToken = JSON.parse(atob(account.token.split('.')[1]));
  const expires = new Date(jwtToken.exp * 1000);
  const timeout = expires.getTime() - Date.now() - (60 * 1000);
  const { accessToken } = window.FB.getAuthResponse();
  authenticateTimeout = setTimeout(() => apiAuthenticate(accessToken), timeout);
}

const stopAuthenticateTimer = () => {
  clearTimeout(authenticateTimeout);
}

const accountService = {
  login,
  apiAuthenticate,
  logout,
  getAll,
  getAccount: () => account,
  loggedIn: () => account != null
}

export default accountService;
const clientUrl = process.env.REACT_APP_FE_ADDRESS || '';

const history = route => {
  window.location.href = clientUrl + route;
}

export default history;
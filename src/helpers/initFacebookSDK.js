import { accountService } from '../services';

const appId = process.env.REACT_APP_FB_APP_ID || '';

const initFacebookSDK = () => {
  return new Promise(resolve => {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: appId,
        cookie: true,
        xfbml: true,
        version: 'v8.0'
      });

      // auto authenticate with the api if already logged in with facebook
      window.FB.getLoginStatus(({ authResponse }) => {
        if (authResponse) {
          accountService.apiAuthenticate(authResponse.accessToken).then(resolve);
        } else {
          resolve();
        }
      });
    };

    // load facebook sdk script
    var js, fjs = document.getElementsByTagName('script')[0];
    if (document.getElementById('facebook-jssdk')) return;
    js = document.createElement('script');
    js.id = 'facebook-jssdk';
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  });
}

export default initFacebookSDK;
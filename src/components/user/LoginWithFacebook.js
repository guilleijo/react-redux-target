import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

import { useDispatch } from 'hooks';
import { facebookLogin } from 'actions/sessionActions';

export default function LoginWithFacebook() {
  const facebookLoginRequest = useDispatch(facebookLogin);
  const [facebookError, setFacebookError] = useState('');

  function responseFacebook(response) {
    facebookLoginRequest(response).catch(err => {
      setFacebookError(err);
    });
  }

  return (
    <div>
      <FacebookLogin
        appId={process.env.FACEBOOK_APP_ID}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="form-label facebook-login"
      />
      {facebookError && <div className="error-label">{facebookError}</div>}
    </div>
  );
}

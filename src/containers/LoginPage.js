import React, { memo } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import right from 'assets/right.jpg';
import smilies from 'assets/smilies.svg';

import { useSession, useDispatch } from 'hooks';
import LoginForm from 'components/user/LoginForm';
import { login } from 'actions/sessionActions';
import routes from 'constants/routesPaths';
import Divider from '../components/common/Divider';

const LoginPage = () => {
  const { authenticated } = useSession();
  const loginRequest = useDispatch(login);

  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return (
    <div className="wrapper center">
      <div className="sign-up-form sign-in left">
        <img src={smilies} alt="smilies" />
        <p className="title" style={{ marginTop: 20 }}>
          <FormattedMessage id="login.title" />
        </p>
        <div>
          <p className="subtitle">Find people near you & Connect</p>
        </div>
        <div>
          <p className="description">
            Create a target wherever on the map, specify your interest: Travel, Dating, Music, etc
            and start conecting with others who share your interest.
          </p>
        </div>
        <LoginForm onSubmit={loginRequest} />
        <Divider />
        <div className="form-label">
          <Link className="link" to={routes.signUp}>
            <FormattedMessage id="login.signup" />
          </Link>
        </div>
      </div>
      <div
        className="right"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img src={right} alt="Right" />
      </div>
    </div>
  );
};

export default memo(LoginPage);

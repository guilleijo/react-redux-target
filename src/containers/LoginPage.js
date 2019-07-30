import React, { memo } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import right from 'assets/right.jpg';

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
      <div className="sign-up-form left">
        <p className="title" style={{ marginBottom: 38 }}>
          <FormattedMessage id="login.title" />
        </p>
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

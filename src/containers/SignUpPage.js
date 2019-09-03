import React, { memo } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import right from 'assets/right.jpg';

import { useSession, useDispatch } from 'hooks';
import { signUp } from 'actions/userActions';
import SignUpForm from 'components/user/SignUpForm';
import routes from 'constants/routesPaths';
import Divider from '../components/common/Divider';

const SignUpPage = () => {
  const { authenticated } = useSession();
  const signUpRequest = useDispatch(signUp);

  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return (
    <div className="wrapper center">
      <div className="sign-up-form left">
        <p className="title" style={{ marginBottom: 38 }}>
          <FormattedMessage id="signup.title" />
        </p>
        <SignUpForm onSubmit={signUpRequest} />
        <Divider />
        <div className="form-label">
          <Link className="link" to={routes.login}>
            <FormattedMessage id="signup.signin" />
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

export default memo(SignUpPage);

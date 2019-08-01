import { SubmissionError } from 'redux-form';
import { sessionService } from 'redux-react-session';

import sessionApi from 'api/sessionApi';

export const login = user => async () => {
  try {
    const response = await sessionApi.login({ user });
    sessionService.saveUser(response.user);
  } catch (err) {
    throw new SubmissionError({
      password: err.errors
    });
  }
};

export const logout = () => async () => {
  try {
    await sessionApi.logout();
    sessionService.deleteSession();
    sessionService.deleteUser();
  } catch (err) {
    throw err;
  }
};

export const facebookLogin = facebookResponse => async () => {
  try {
    const { accessToken } = facebookResponse;
    const response = await sessionApi.facebookLogin({
      accessToken
    });
    sessionService.saveUser(response.user);
  } catch (err) {
    throw err.error;
  }
};

import React, { memo } from 'react';
import { func, bool } from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { injectIntl, intlShape, defineMessages, FormattedMessage } from 'react-intl';

import Loading from 'components/common/Loading';
import Input from 'components/common/Input';
import Select from 'components/common/Select';
import { validations, signUp } from 'utils/constraints';

const messages = defineMessages({
  name: { id: 'login.form.name' },
  email: { id: 'login.form.email' },
  password: { id: 'login.form.password' },
  passPlaceholder: { id: 'signup.form.passpalceholder' },
  passConfirmation: { id: 'signup.form.passconfirmation' },
  gender: { id: 'login.form.gender' },
  selectGender: { id: 'login.form.selectgender' }
});

export const SignUpForm = ({ handleSubmit, submitting, intl }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field name="name" label={intl.formatMessage(messages.name)} component={Input} type="text" />
    </div>
    <div>
      <Field
        name="email"
        label={intl.formatMessage(messages.email)}
        component={Input}
        type="email"
      />
    </div>
    <div>
      <Field
        name="password"
        label={intl.formatMessage(messages.password)}
        component={Input}
        type="password"
        placeholder={intl.formatMessage(messages.passPlaceholder)}
      />
    </div>
    <div>
      <Field
        name="passwordConfirmation"
        label={intl.formatMessage(messages.passConfirmation)}
        component={Input}
        type="password"
      />
    </div>
    <div>
      <Field
        name="gender"
        type="select"
        label={intl.formatMessage(messages.gender)}
        component={Select}
        placeholder={intl.formatMessage(messages.selectGender)}
      />
    </div>
    <div>
      {submitting ? (
        <Loading />
      ) : (
        <button className="submit" type="submit">
          <FormattedMessage id="signup.form.submit" />
        </button>
      )}
    </div>
  </form>
);

SignUpForm.propTypes = {
  handleSubmit: func.isRequired,
  submitting: bool.isRequired,
  intl: intlShape.isRequired
};

export default reduxForm({
  form: 'signUp',
  validate: validations(signUp, { fullMessages: false })
})(injectIntl(memo(SignUpForm)));

import React from 'react';
import { string, object } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { parseInputErrors } from 'utils/helpers';

const Input = ({ input, label, type, placeholder, meta: { touched, error } }) => (
  <div>
    <div>{label && <label className="form-label">{label}</label>}</div>
    <div>
      <input className="form-input" {...input} {...{ placeholder, type }} />
      {touched && error && (
        <div className="form-label">
          <span>
            <FormattedMessage
              id={parseInputErrors(error)}
              defaultMessage={parseInputErrors(error)}
            />
          </span>
        </div>
      )}
    </div>
  </div>
);

Input.propTypes = {
  input: object.isRequired,
  label: string,
  type: string.isRequired,
  placeholder: string,
  meta: object
};

export default Input;

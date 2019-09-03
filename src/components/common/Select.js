import React from 'react';
import { string, object } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { parseInputErrors } from 'utils/helpers';

const Select = ({ input, label, type, placeholder, meta: { touched, error } }) => (
  <div>
    <div>{label && <label className="form-label">{label}</label>}</div>
    <div>
      <select className="form-input" {...input} {...{ placeholder, type }}>
        <option value="">{placeholder.toUpperCase()}</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
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

Select.propTypes = {
  input: object.isRequired,
  label: string,
  type: string.isRequired,
  placeholder: string,
  meta: object
};

export default Select;

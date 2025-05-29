import React from 'react';
import PropTypes from 'prop-types';

const IconCreditcard = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M3.005 3h18a1 1 0 011 1v16a1 1 0 01-1 1h-18a1 1 0 01-1-1V4a1 1 0 011-1zm17 8h-16v8h16v-8zm0-2V5h-16v4h16zm-6 6h4v2h-4v-2z"
        fill="currentColor"
      />
    </svg>
  );
};

IconCreditcard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconCreditcard;

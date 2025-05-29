import React from 'react';
import PropTypes from 'prop-types';

const IconCheck = props => {
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
        d="M18.549 8.949L10.8 16.697l-5.049-5.048L7.45 9.95l3.351 3.352 6.052-6.052 1.697 1.698z"
        fill="currentColor"
      />
    </svg>
  );
};

IconCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconCheck;

import React from 'react';
import PropTypes from 'prop-types';

const IconOwners = props => {
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
        d="M2 22a8 8 0 1116 0h-2a6 6 0 00-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm8.284 3.703A8.002 8.002 0 0123 22h-2a6.001 6.001 0 00-3.537-5.473l.82-1.824zm-.688-11.29A5.5 5.5 0 0121 8.5a5.499 5.499 0 01-5 5.478v-2.013a3.5 3.5 0 001.041-6.609l.555-1.943z"
        fill="currentColor"
      />
    </svg>
  );
};

IconOwners.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconOwners;

import React from 'react';
import PropTypes from 'prop-types';

const IconProfileNormal24 = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 12a8 8 0 11-16 0 8 8 0 0116 0zm2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-10 5a5 5 0 005-5h-2a3 3 0 01-3 3v2zM8 8h2v3H8V8zm6 0h-2v3h2V8z"
        fill="currentColor"
      />
    </svg>
  );
};

IconProfileNormal24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconProfileNormal24;

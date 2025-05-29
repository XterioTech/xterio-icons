import React from 'react';
import PropTypes from 'prop-types';

const IconProfileNormal = props => {
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
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm5 8a5 5 0 01-5 5v-2a3 3 0 003-3h2zm-7-1H8V8h2v3zm4 0h-2V8h2v3z"
        fill="currentColor"
      />
    </svg>
  );
};

IconProfileNormal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconProfileNormal;

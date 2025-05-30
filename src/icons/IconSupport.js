import React from 'react';
import PropTypes from 'prop-types';

const IconSupport = props => {
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
        d="M19.938 8H21a2 2 0 012 2v4a2 2 0 01-2 2h-1.062A8.001 8.001 0 0112 23v-2a6 6 0 006-6V9A6 6 0 006 9v7H3a2 2 0 01-2-2v-4a2 2 0 012-2h1.062a8.001 8.001 0 0115.876 0zM3 10v4h1v-4H3zm17 0v4h1v-4h-1zM7.76 15.785l1.06-1.696A5.972 5.972 0 0012 15a5.972 5.972 0 003.18-.911l1.06 1.696A7.963 7.963 0 0112 17a7.962 7.962 0 01-4.24-1.215z"
        fill="currentColor"
      />
    </svg>
  );
};

IconSupport.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSupport;

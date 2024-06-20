import React from 'react';
import PropTypes from 'prop-types';

const IconEmail24 = props => {
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
        d="M3.333 6h17.334v12H3.333V6zm-2 14V4h21.334v16H1.333zM6.83 8.164L5.97 9.97 12 12.84l6.03-2.87-.86-1.806L12 10.626 6.83 8.164z"
        fill="currentColor"
      />
    </svg>
  );
};

IconEmail24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconEmail24;

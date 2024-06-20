import React from 'react';
import PropTypes from 'prop-types';

const IconDelete16 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '16'}
      height={size || '16'}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 1h8v2H4V1zM1 4h14v2H4v7h8V7h2v8H2V6H1V4zm4 4h2v3H5V8zm6 0H9v3h2V8z"
        fill="currentColor"
      />
    </svg>
  );
};

IconDelete16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconDelete16;

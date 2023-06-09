import React from 'react';
import PropTypes from 'prop-types';

const IconCheckError12 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '12'}
      height={size || '12'}
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 5.293L2.354 1.646l-.708.708L5.293 6 1.646 9.646l.708.708L6 6.707l3.646 3.647.708-.708L6.707 6l3.647-3.646-.708-.708L6 5.293z"
        fill="currentColor"
      />
    </svg>
  );
};

IconCheckError12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconCheckError12;

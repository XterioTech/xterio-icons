import React from 'react';
import PropTypes from 'prop-types';

const IconCheckRight12 = props => {
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
        d="M10.707 4.707l-5 5a1 1 0 01-1.414 0l-3-3 1.414-1.414L5 7.586l4.293-4.293 1.414 1.414z"
        fill="currentColor"
      />
    </svg>
  );
};

IconCheckRight12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconCheckRight12;

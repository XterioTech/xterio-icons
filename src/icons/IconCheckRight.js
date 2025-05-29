import React from 'react';
import PropTypes from 'prop-types';

const IconCheckRight = props => {
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
        d="M10 15.17l9.192-9.191 1.414 1.414L10 17.999l-6.364-6.364 1.414-1.414 4.95 4.95z"
        fill="currentColor"
      />
    </svg>
  );
};

IconCheckRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconCheckRight;

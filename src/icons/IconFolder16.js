import React from 'react';
import PropTypes from 'prop-types';

const IconFolder16 = props => {
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
        d="M5.528 4l2 1H13v7H3V4h2.528zM8 3L6 2H1v12h14V3H8zm4 3H7v2h5V6z"
        fill="currentColor"
      />
    </svg>
  );
};

IconFolder16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconFolder16;

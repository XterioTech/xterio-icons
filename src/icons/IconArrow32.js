import React from 'react';
import PropTypes from 'prop-types';

const IconArrow32 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 12l8 8 8-8"
          stroke="#FEFEFE"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </svg>
  );
};

IconArrow32.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconArrow32.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconArrow32;

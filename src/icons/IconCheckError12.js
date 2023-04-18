import React from 'react';
import PropTypes from 'prop-types';

const IconCheckError12 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="12"
      height="12"
      viewBox="0 0 12 12"
    >
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10L2 2" stroke="#FEFEFE" />
        <path d="M2 10l8-8" stroke="#FEFEFE" />
      </svg>
    </svg>
  );
};

IconCheckError12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconCheckError12.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconCheckError12;
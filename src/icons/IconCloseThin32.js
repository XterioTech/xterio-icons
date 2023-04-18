import React from 'react';
import PropTypes from 'prop-types';

const IconCloseThin32 = props => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 14.586l-8-8L6.586 8l8 8-8 8L8 25.414l8-8 8 8L25.414 24l-8-8 8-8L24 6.586l-8 8z"
        />
      </svg>
    </svg>
  );
};

IconCloseThin32.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconCloseThin32.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconCloseThin32;

import React from 'react';
import PropTypes from 'prop-types';

const IconChecked16 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 7.5l4 4L13.5 5"
          stroke="#7DD5F9"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </svg>
  );
};

IconChecked16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconChecked16.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconChecked16;

import React from 'react';
import PropTypes from 'prop-types';

const IconInfo12 = props => {
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
        <mask
          id="a"
          style={{maskType: 'alpha'}}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="12"
          height="12"
        >
          <rect width="12" height="12" />
        </mask>
        <g mask="url(#a)" stroke="#FEFEFE">
          <circle cx="6" cy="6" r="4.5" />
          <path d="M6 3v1" />
          <path d="M5 5.875L6 5.5v3l1-.375" strokeLinejoin="round" />
        </g>
      </svg>
    </svg>
  );
};

IconInfo12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconInfo12.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconInfo12;

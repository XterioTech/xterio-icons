import React from 'react';
import PropTypes from 'prop-types';

const IconFailed16 = props => {
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
      <svg
        width="16"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_222_815)">
          <path d="M8 16A8 8 0 108 0a8 8 0 000 16z" fill="#E6B1F7" />
          <path d="M5 11l6-6" stroke="#141430" strokeWidth="2" />
          <path d="M11 11L5 5" stroke="#141430" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_222_815">
            <rect width="16" height="16" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconFailed16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconFailed16.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconFailed16;

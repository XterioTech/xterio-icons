import React from 'react';
import PropTypes from 'prop-types';

const originFill = 'colorful';

const IconVideoScalable = props => {
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
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_222_920)">
          <path
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            fill="url(#paint0_linear_222_920)"
          />
          <path d="M16.8 12l-7.2 4.157V7.843L16.8 12z" fill="#141430" />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_222_920"
            x1="0"
            y1="12"
            x2="24"
            y2="12"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#85E0FB" />
            <stop offset=".99" stopColor="#EAA5E6" />
          </linearGradient>
          <clipPath id="clip0_222_920">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconVideoScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconVideoScalable;

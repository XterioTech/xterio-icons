import React from 'react';
import PropTypes from 'prop-types';

const IconPausedScalable = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_222_906)">
          <path
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            fill="url(#paint0_linear_222_906)"
          />
          <path d="M10.875 7.875h-2.25v8.25h2.25v-8.25z" fill="#141430" />
          <path d="M15.375 7.875h-2.25v8.25h2.25v-8.25z" fill="#141430" />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_222_906"
            x1="0"
            y1="12"
            x2="24"
            y2="12"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#85E0FB" />
            <stop offset=".99" stopColor="#EAA5E6" />
          </linearGradient>
          <clipPath id="clip0_222_906">
            <rect width="24" height="24" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconPausedScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconPausedScalable.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconPausedScalable;

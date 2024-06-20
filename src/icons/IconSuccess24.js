import React from 'react';
import PropTypes from 'prop-types';

const IconSuccess24 = props => {
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
        <g clipPath="url(#clip0_1_173)">
          <path
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            fill="url(#paint0_linear_1_173)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.621 10l-7.06 7.06a1.5 1.5 0 01-2.122 0L5.38 13 7.5 10.879l3 3 6-6L18.621 10z"
            fill="#0A1161"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_173"
            x1="0"
            y1="12.414"
            x2="24"
            y2="12.414"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9EE6FC" />
            <stop offset="1" stopColor="#EBB9E7" />
          </linearGradient>
          <clipPath id="clip0_1_173">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconSuccess24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSuccess24;

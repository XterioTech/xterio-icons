import React from 'react';
import PropTypes from 'prop-types';

const originFill = ['url(#paint0_linear_222_900)'];

const IconTwitterScalable = props => {
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
      <svg>
        <path
          d="M18 8.125c-.45.225-.9.3-1.425.375.525-.3.9-.75 1.05-1.35-.45.3-.975.45-1.575.6a2.619 2.619 0 00-1.8-.75c-1.275 0-2.4 1.125-2.4 2.475 0 .225 0 .375.075.525a6.901 6.901 0 01-5.1-2.55c-.225.375-.3.75-.3 1.275 0 .825.45 1.575 1.125 2.025-.375 0-.75-.15-1.125-.3 0 1.2.825 2.175 1.95 2.4-.225.075-.45.075-.675.075-.15 0-.3 0-.45-.075a2.43 2.43 0 002.325 1.725c-.825.675-1.875 1.05-3.075 1.05H6c1.125.675 2.4 1.125 3.75 1.125 4.5 0 6.975-3.75 6.975-6.975v-.3C17.25 9.1 17.7 8.65 18 8.125z"
          fill={color || _originFill[0]}
        />
        <defs>
          <linearGradient
            id="paint0_linear_222_900"
            x1="6"
            y1="12.043"
            x2="18"
            y2="12.043"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9EE6FC" />
            <stop offset="1" stopColor="#EBB9E7" />
          </linearGradient>
        </defs>
      </svg>
    </svg>
  );
};

IconTwitterScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconTwitterScalable;

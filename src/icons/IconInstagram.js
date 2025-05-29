import React from 'react';
import PropTypes from 'prop-types';

const originFill = ['url(#paint0_linear_0_468)'];

const IconInstagram = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.09 4.636H7.91A3.273 3.273 0 004.635 7.91v8.182a3.273 3.273 0 003.273 3.273h8.182a3.273 3.273 0 003.273-3.273V7.909a3.273 3.273 0 00-3.273-3.273zM7.91 3A4.91 4.91 0 003 7.91v8.18A4.91 4.91 0 007.91 21h8.18A4.91 4.91 0 0021 16.09V7.91A4.91 4.91 0 0016.09 3H7.91zM12 15.273a3.273 3.273 0 100-6.546 3.273 3.273 0 000 6.546zm0 1.636a4.91 4.91 0 100-9.818 4.91 4.91 0 000 9.818zm4.91-9a.818.818 0 100-1.636.818.818 0 000 1.636z"
        fill={color || originFill[0]}
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_468"
          x1="3"
          y1="12.31"
          x2="21"
          y2="12.31"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9EE6FC" />
          <stop offset="1" stopColor="#EBB9E7" />
        </linearGradient>
      </defs>
    </svg>
  );
};

IconInstagram.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconInstagram;

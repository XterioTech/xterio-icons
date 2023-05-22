import React from 'react';
import PropTypes from 'prop-types';

const originFill = ['url(#paint0_linear_222_919)'];

const IconMediumScalable = props => {
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
        d="M13.153 12.112c0 2.822-2.273 5.11-5.076 5.11-2.804 0-5.077-2.288-5.077-5.11C3 9.289 5.273 7 8.077 7c2.803 0 5.076 2.289 5.076 5.112zm5.57 0c0 2.657-1.137 4.812-2.54 4.812-1.401 0-2.537-2.155-2.537-4.812 0-2.658 1.136-4.813 2.538-4.813 1.401 0 2.538 2.155 2.538 4.813zm2.277 0c0 2.38-.4 4.31-.893 4.31s-.892-1.93-.892-4.31c0-2.381.4-4.311.892-4.311.493 0 .893 1.93.893 4.31z"
        fill={color || originFill[0]}
      />
      <defs>
        <linearGradient
          id="paint0_linear_222_919"
          x1="3"
          y1="12.288"
          x2="21"
          y2="12.288"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9EE6FC" />
          <stop offset="1" stopColor="#EBB9E7" />
        </linearGradient>
      </defs>
    </svg>
  );
};

IconMediumScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconMediumScalable;

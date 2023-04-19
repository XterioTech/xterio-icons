import React from 'react';
import PropTypes from 'prop-types';

const originFill = ['url(#paint0_linear_222_903)'];

const IconInstagramScalable = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
      style={{ color }}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
    >
      <svg>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.5 7.5h-5a2 2 0 00-2 2v5a2 2 0 002 2h5a2 2 0 002-2v-5a2 2 0 00-2-2zm-5-1a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3v-5a3 3 0 00-3-3h-5zM12 14a2 2 0 100-4 2 2 0 000 4zm0 1a3 3 0 100-6 3 3 0 000 6zm3-5.5a.5.5 0 100-1 .5.5 0 000 1z"
          fill={color || originFill[0]}
        />
        <defs>
          <linearGradient
            id="paint0_linear_222_903"
            x1="6.5"
            y1="12.19"
            x2="17.5"
            y2="12.19"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9EE6FC" />
            <stop offset="1" stop-color="#EBB9E7" />
          </linearGradient>
        </defs>
      </svg>
    </svg>
  );
};

IconInstagramScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconInstagramScalable;

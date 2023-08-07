import React from 'react';
import PropTypes from 'prop-types';

const IconSuccess64 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '64'}
      height={size || '64'}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <svg
        width="64"
        height="64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="24" fill="url(#paint0_linear_774_7)" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M44.536 26L29 41.535 19.465 32 23 28.464l6 6 12-12L44.536 26z"
          fill="#0A1161"
        />
        <defs>
          <linearGradient
            id="paint0_linear_774_7"
            x1="8"
            y1="32.828"
            x2="56"
            y2="32.828"
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

IconSuccess64.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSuccess64;

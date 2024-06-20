import React from 'react';
import PropTypes from 'prop-types';

const IconLoadingBarScalable = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '68'}
      height={size || '68'}
      viewBox="0 0 68 68"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <svg
        width="68"
        height="68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31.5.5H34C52.502.5 67.5 15.498 67.5 34v2.5h-5V34C62.5 18.26 49.74 5.5 34 5.5h-2.5v-5z"
          fill="url(#paint0_linear_1_475)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_475"
            x1="31.5"
            y1="19.121"
            x2="67.5"
            y2="19.121"
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

IconLoadingBarScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconLoadingBarScalable;

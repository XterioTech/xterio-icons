import React from 'react';
import PropTypes from 'prop-types';

const IconTokenEth = props => {
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
      <g opacity="0.7" fill="#fff">
        <path
          opacity="0.6"
          d="M11.945 9.265L5.5 12.195l6.445 3.81 6.447-3.81-6.447-2.93z"
        />
        <path opacity="0.45" d="M5.502 12.195l6.445 3.81V1.5L5.502 12.195z" />
        <path opacity="0.8" d="M11.947 1.5V16.005l6.445-3.81L11.947 1.5z" />
        <path opacity="0.45" d="M5.5 13.417l6.445 9.083v-5.275L5.5 13.417z" />
        <path opacity="0.8" d="M11.945 17.225V22.5l6.45-9.083-6.45 3.808z" />
      </g>
    </svg>
  );
};

IconTokenEth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconTokenEth;

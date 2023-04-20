import React from 'react';
import PropTypes from 'prop-types';

const originFill = 'normal';

const IconOrderGame64 = props => {
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
      <svg>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 6h5v3h14V6h5v3h12v10h-5v-5h-7v3h-5v-3H25v3h-5v-3h-7v36h7v5H8V9h12V6zm22 48c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13zm0 5c9.941 0 18-8.059 18-18s-8.059-18-18-18-18 8.059-18 18 8.059 18 18 18zm.768-13.232L50.535 38 47 34.465l-6 6-3-3L34.465 41l4.767 4.768a2.5 2.5 0 003.536 0z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconOrderGame64.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconOrderGame64;

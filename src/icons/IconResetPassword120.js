import React from 'react';
import PropTypes from 'prop-types';

const IconResetPassword120 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="120"
      height="120"
      viewBox="0 0 120 120"
    >
      <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M60 46.5a27.371 27.371 0 00-14.5 4.129V41h-7v15.852A27.384 27.384 0 0032.5 74c0 15.188 12.312 27.5 27.5 27.5S87.5 89.188 87.5 74 75.188 46.5 60 46.5zm0 7c-11.322 0-20.5 9.178-20.5 20.5S48.678 94.5 60 94.5 80.5 85.322 80.5 74 71.322 53.5 60 53.5zM51.5 74a8.5 8.5 0 1112 7.748v3.385L56.5 87v-5.252a8.502 8.502 0 01-5-7.748z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M60 19.5c-11.874 0-21.5 9.626-21.5 21.5v5.38a34.991 34.991 0 017-4.245V41c0-8.008 6.492-14.5 14.5-14.5S74.5 32.992 74.5 41v1.136a34.991 34.991 0 017 4.244V41c0-11.874-9.626-21.5-21.5-21.5z"
        />
      </svg>
    </svg>
  );
};

IconResetPassword120.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconResetPassword120.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconResetPassword120;

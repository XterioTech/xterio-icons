import React from 'react';
import PropTypes from 'prop-types';

const IconSubmitTransaction64 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="64"
      height="64"
      viewBox="0 0 64 64"
    >
      <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M51 23.733V12H11v40l7.895-5.333h8.947"
          stroke="#FEFEFE"
          strokeWidth="5"
          strokeLinecap="square"
        />
        <path
          d="M45 38.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
          stroke="#FEFEFE"
          strokeWidth="5"
        />
        <path
          d="M37 49s1.2-4 8-4 8 4 8 4"
          stroke="#FEFEFE"
          strokeWidth="5"
          strokeLinecap="square"
        />
        <path
          d="M23 25h16"
          stroke="#FEFEFE"
          strokeWidth="5"
          strokeLinecap="square"
        />
        <path
          d="M23 35h4"
          stroke="#FEFEFE"
          strokeWidth="5"
          strokeLinecap="square"
        />
      </svg>
    </svg>
  );
};

IconSubmitTransaction64.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconSubmitTransaction64.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconSubmitTransaction64;

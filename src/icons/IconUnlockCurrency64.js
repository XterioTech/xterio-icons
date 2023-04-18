import React from 'react';
import PropTypes from 'prop-types';

const IconUnlockCurrency64 = props => {
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
          d="M45.5 16c0 .889-.921 2.526-4.384 4.084C37.888 21.537 33.253 22.5 28 22.5c-5.253 0-9.888-.963-13.116-2.416C11.42 18.526 10.5 16.89 10.5 16c0-.889.921-2.526 4.384-4.084C18.112 10.463 22.747 9.5 28 9.5c5.253 0 9.888.963 13.116 2.416C44.58 13.474 45.5 15.11 45.5 16z"
          stroke="#FEFEFE"
          strokeWidth="5"
        />
        <path
          d="M45.5 18.5v7"
          stroke="#FEFEFE"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 18v25.11c0 .25.092.492.264.675C12.484 45.633 16.056 49 27 49"
          stroke="#FEFEFE"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 31c1.765 1.765 7.5 4.588 15.912 4.588 4.731 0 9.934-.465 12.941-1.764"
          stroke="#FEFEFE"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M41.374 54.998a5.929 5.929 0 105.011-10.746 5.929 5.929 0 00-5.011 10.746z"
          stroke="#FEFEFE"
          strokeWidth="5"
        />
        <path
          d="M46.387 44.25l5.01-10.746"
          stroke="#FEFEFE"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M50.469 38.305L54.003 40"
          stroke="#FEFEFE"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    </svg>
  );
};

IconUnlockCurrency64.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconUnlockCurrency64.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconUnlockCurrency64;

import React from 'react';
import PropTypes from 'prop-types';

const originFill = ['url(#paint0_linear_1_416)'];

const IconLogoScalable = props => {
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
        d="M20.352 17.219a6.933 6.933 0 001.698-4.538c0-.651-.093-1.3-.273-1.925-1.124-3.947-5.451-6.05-9.271-4.506-.652.264-1.235.64-1.8 1.054-.681.507-1.459.657-2.294.507-.645-.116-1.22-.39-1.773-.712a1.36 1.36 0 01-.603-.73 1.8 1.8 0 01-.057-.208c-.012-.05-.023-.099-.038-.147a2.114 2.114 0 00-4.134.433C1.681 7.967 3.19 9.123 4.623 8.6a1.44 1.44 0 011.22.088c.406.21.79.459 1.146.745.88.72 1.311 1.625 1.21 2.776a6.463 6.463 0 00.264 2.411 6.933 6.933 0 0011.889 2.599zm-8.17-6.451a3.496 3.496 0 00-.59 1.942 3.5 3.5 0 003.491 3.495 3.494 3.494 0 10-2.9-5.437z"
        fill={color || originFill[0]}
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_416"
          x1="1.8"
          y1="4.5"
          x2="22.05"
          y2="19.688"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CBF2FE" />
          <stop offset="0.391" stopColor="#7DD5F9" />
          <stop offset="0.735" stopColor="#E6B1F7" />
          <stop offset="1" stopColor="#E1DFA2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

IconLogoScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconLogoScalable;

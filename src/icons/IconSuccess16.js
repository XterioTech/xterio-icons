import React from 'react';
import PropTypes from 'prop-types';

const IconSuccess16 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '16'}
      height={size || '16'}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <svg
        width="16"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_222_817)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-8.293 3.707l5-5-1.414-1.414L7 9.586 4.707 7.293 3.293 8.707l3 3a1 1 0 001.414 0z"
            fill="#6CDF8C"
          />
        </g>
        <defs>
          <clipPath id="clip0_222_817">
            <path fill="#fff" d="M0 0h16v16H0z" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconSuccess16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSuccess16;

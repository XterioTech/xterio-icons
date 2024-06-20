import React from 'react';
import PropTypes from 'prop-types';

const IconDirection12 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '12'}
      height={size || '12'}
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <g clipPath="url(#clip0_1_13)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.5 11.043l4.95-4.95-1.415-1.413-3.242 3.242V.851h-2v7.071L1.55 4.68.136 6.094l4.95 4.95a1 1 0 001.414 0z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_13">
          <path fill="#fff" transform="rotate(180 6 6)" d="M0 0h12v12H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

IconDirection12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconDirection12;

import React from 'react';
import PropTypes from 'prop-types';

const IconFailed24 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
      style={{ color }}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
    >
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_222_840)">
          <path
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            fill="#E6B1F7"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.415 11.996l3.84-3.84-1.415-1.414-3.84 3.84-3.84-3.84-1.414 1.414 3.84 3.84-3.84 3.84L8.16 17.25 12 13.41l3.84 3.84 1.415-1.414-3.84-3.84z"
            fill="#FEFEFE"
          />
        </g>
        <defs>
          <clipPath id="clip0_222_840">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconFailed24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconFailed24;

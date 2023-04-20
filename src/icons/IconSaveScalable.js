import React from 'react';
import PropTypes from 'prop-types';

const IconSaveScalable = props => {
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
      <svg>
        <g clipPath="url(#clip0_222_915)">
          <path
            d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z"
            fill="#7DD5F9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 7.5h-2v4H9l3 3 3-3h-2v-4zM7.25 14h1.5v1.75h6.5V14h1.5v3.25h-9.5V14z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_222_915">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconSaveScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSaveScalable;

import React from 'react';
import PropTypes from 'prop-types';

const IconSaveScalable = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_222_915)">
          <path d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 7.5h-2v4H9l3 3 3-3h-2v-4zM7.25 14h1.5v1.75h6.5V14h1.5v3.25h-9.5V14z"
          />
        </g>
        <defs>
          <clipPath id="clip0_222_915">
            <rect width="24" height="24" />
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

IconSaveScalable.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconSaveScalable;

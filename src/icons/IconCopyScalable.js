import React from 'react';
import PropTypes from 'prop-types';

const IconCopyScalable = props => {
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
        <g clipPath="url(#clip0_222_916)">
          <path d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.25 10.5V13h1.5v-2.19l1.78-1.78a1.371 1.371 0 011.94 1.94l-.5.5 1.06 1.06.5-.5a2.871 2.871 0 00-4.06-4.06l-2 2a.75.75 0 00-.22.53zm4 3.5v-2.5h-1.5v2.19l-1.78 1.78a1.371 1.371 0 01-1.94-1.94l.5-.5-1.06-1.06-.5.5a2.871 2.871 0 104.06 4.06l2-2a.75.75 0 00.22-.53z"
          />
        </g>
        <defs>
          <clipPath id="clip0_222_916">
            <rect width="24" height="24" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconCopyScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconCopyScalable.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconCopyScalable;
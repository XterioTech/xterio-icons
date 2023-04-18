import React from 'react';
import PropTypes from 'prop-types';

const IconMessageLogoScalable = props => {
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
        <g clipPath="url(#clip0_222_917)">
          <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z" />
          <path d="M8.402 12.126a3.6 3.6 0 016.955-1.864l.62 2.319 1.626 1.428-9.273 2.484.693-2.049-.621-2.318z" />
          <path d="M10.212 7.293l1.004-.89.466 1.738-1.16.31-.31-1.159z" />
          <path d="M10.803 16.452l2.898-.777-.27 1.315-2.897.776.27-1.314z" />
        </g>
        <defs>
          <clipPath id="clip0_222_917">
            <rect width="24" height="24" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconMessageLogoScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconMessageLogoScalable.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconMessageLogoScalable;

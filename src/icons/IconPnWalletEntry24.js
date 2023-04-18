import React from 'react';
import PropTypes from 'prop-types';

const IconPnWalletEntry24 = props => {
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
        <g clipPath="url(#clip0_222_843)" stroke="#FEFEFE">
          <path d="M.5.5h23v15.293L15.793 23.5H.5V.5z" />
          <path d="M10 8l4 4-4 4" />
        </g>
        <defs>
          <clipPath id="clip0_222_843">
            <rect width="24" height="24" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconPnWalletEntry24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconPnWalletEntry24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconPnWalletEntry24;

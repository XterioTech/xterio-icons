import React from 'react';
import PropTypes from 'prop-types';

const IconChainEthereumScalable = props => {
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
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_222_886)">
          <path
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            fill="#6284F5"
          />
          <path d="M8 12l4-7 4 7-4 2-4-2z" fill="#fff" />
          <path d="M8 13l4 6 4-6-4 2-4-2z" fill="#fff" />
        </g>
        <defs>
          <clipPath id="clip0_222_886">
            <rect width="24" height="24" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconChainEthereumScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconChainEthereumScalable.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconChainEthereumScalable;
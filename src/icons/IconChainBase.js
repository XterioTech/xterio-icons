import React from 'react';
import PropTypes from 'prop-types';

const IconChainBase = props => {
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
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_0_363)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.94 17.94A8.4 8.4 0 013.686 13.2H16.8v-2.4H3.686a8.4 8.4 0 1114.254 7.14zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"
            fill="#0052FF"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_363">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconChainBase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconChainBase;

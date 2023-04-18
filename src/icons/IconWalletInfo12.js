import React from 'react';
import PropTypes from 'prop-types';

const IconWalletInfo12 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="12"
      height="12"
      viewBox="0 0 12 12"
    >
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="a"
          style={{maskType: 'alpha'}}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="12"
          height="12"
        >
          <path d="M11.5.5H.5v11h11V.5z" stroke="#FEFEFE" />
        </mask>
        <g mask="url(#a)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 10a4 4 0 100-8 4 4 0 000 8zm0 1A5 5 0 106 1a5 5 0 000 10zm-.5-2.5v-1h1v1h-1zm0-5v3h1v-3h-1z"
          />
        </g>
      </svg>
    </svg>
  );
};

IconWalletInfo12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconWalletInfo12.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconWalletInfo12;

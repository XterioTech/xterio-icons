import React from 'react';
import PropTypes from 'prop-types';

const IconWalletConnected12 = props => {
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
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 2.5h-8v7h8V8.25H5.25v-4.5H9.5V2.5zm0 2.75v1.5H6.75v-1.5H9.5zM0 1v10h11V1H0zm9 4.5H7.5v1h1l.5-1z"
        />
      </svg>
    </svg>
  );
};

IconWalletConnected12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconWalletConnected12.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconWalletConnected12;

import React from 'react';
import PropTypes from 'prop-types';

const IconWalletConnected32 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.134 9.067H7.867v14.266h16.267V20.8H17.2v-9.2h6.934V9.067zm0 5.2v3.866h-4.267v-3.866h4.267zM26.8 26V6.4H5.2V26h21.6zm-3.6-10.8h-2.8v2h2.4l.4-2z"
        />
      </svg>
    </svg>
  );
};

IconWalletConnected32.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconWalletConnected32.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconWalletConnected32;

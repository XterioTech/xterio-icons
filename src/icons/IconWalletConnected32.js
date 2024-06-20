import React from 'react';
import PropTypes from 'prop-types';

const IconWalletConnected32 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '32'}
      height={size || '32'}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.133 9.067H7.867v14.266h16.266V20.8H17.2v-9.2h6.933V9.067zm0 5.2v3.866h-4.266v-3.866h4.266zM26.8 26V6.4H5.2V26h21.6zm-3.6-10.8h-2.8v2h2.4l.4-2z"
        fill="currentColor"
      />
    </svg>
  );
};

IconWalletConnected32.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWalletConnected32;

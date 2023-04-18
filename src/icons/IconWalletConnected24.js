import React from 'react';
import PropTypes from 'prop-types';

const IconWalletConnected24 = props => {
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
        <path
          d="M19.1 5.8H4.9v12.7h14.2V5.8z"
          stroke="#FEFEFE"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M19.1 9.7h-5.2v4.9h5.2V9.7z"
          stroke="#FEFEFE"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M15.3 11.4h2.1l-.3 1.5h-1.8v-1.5z" />
      </svg>
    </svg>
  );
};

IconWalletConnected24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconWalletConnected24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconWalletConnected24;

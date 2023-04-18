import React from 'react';
import PropTypes from 'prop-types';

const IconWalletConnected80 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="80"
      height="80"
      viewBox="0 0 80 80"
    >
      <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M64.5 18.5h-49v44h49v-44z"
          stroke="#FEFEFE"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M64.5 31.5h-19v18h19v-18z"
          stroke="#FEFEFE"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path d="M55.5 38h-2a2.5 2.5 0 000 5h2a2.5 2.5 0 000-5z" />
      </svg>
    </svg>
  );
};

IconWalletConnected80.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconWalletConnected80.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconWalletConnected80;

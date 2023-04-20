import React from 'react';
import PropTypes from 'prop-types';

const IconWalletConnected12 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '12'}
      height={size || '12'}
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <svg>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 2.5h-8v7h8V8.25H5.25v-4.5H9.5V2.5zm0 2.75v1.5H6.75v-1.5H9.5zM0 1v10h11V1H0zm9 4.5H7.5v1h1l.5-1z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconWalletConnected12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWalletConnected12;

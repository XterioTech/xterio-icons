import React from 'react';
import PropTypes from 'prop-types';

const IconWalletConnected24 = props => {
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
      <svg>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.9 4.8h16.2V19.5H3.9V4.8zm14.2 2v1.9h-5.2v6.9h5.2v1.9H5.9V6.8h12.2zm0 3.9v2.9h-3.2v-2.9h3.2zm-.7.7h-2.1v1.5h1.8l.3-1.5z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconWalletConnected24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWalletConnected24;

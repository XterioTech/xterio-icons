import React from 'react';
import PropTypes from 'prop-types';

const IconAssetTabPlatform = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.182 12a8.182 8.182 0 11-16.364 0 8.182 8.182 0 0116.364 0zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zM7.822 8.367a1.19 1.19 0 10.368 2.286s.307-.123.68.096l.045.026c.415.24 1.297.752 1.24 1.822a3.905 3.905 0 101.45-2.673v-.003c-.905.67-1.812.192-2.233-.029l-.027-.014c-.383-.201-.438-.534-.438-.534a1.19 1.19 0 00-1.085-.977zm5.496 6.464a1.968 1.968 0 111.417-3.671 1.968 1.968 0 01-1.417 3.671z"
        fill="currentColor"
      />
    </svg>
  );
};

IconAssetTabPlatform.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconAssetTabPlatform;

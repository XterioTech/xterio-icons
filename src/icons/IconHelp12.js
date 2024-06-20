import React from 'react';
import PropTypes from 'prop-types';

const IconHelp12 = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 10a4 4 0 100-8 4 4 0 000 8zm0 1A5 5 0 106 1a5 5 0 000 10z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.396 4.604a.56.56 0 00-.792 0l-.75.75-.708-.708.75-.75a1.56 1.56 0 112.208 2.208l-.604.603V7.5h-1V6.293l.896-.897a.56.56 0 000-.792zM5.5 9V8h1v1h-1z"
        fill="currentColor"
      />
    </svg>
  );
};

IconHelp12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconHelp12;

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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 6H6v12h13v-2h-6V8h6V6zm0 4v4h-4v-4h4zm2 10V4H4v16h17zm-3-9h-2v2h1.5l.5-2z"
        fill="currentColor"
      />
    </svg>
  );
};

IconWalletConnected24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWalletConnected24;

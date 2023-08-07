import React from 'react';
import PropTypes from 'prop-types';

const IconWalletConnected16 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '16'}
      height={size || '16'}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 4H3v9h10v-1H7V5h6V4zm0 3v3H9V7h4zm2 8V2H1v13h14zm-2.333-7.5H10v2h2l.667-2z"
        fill="currentColor"
      />
    </svg>
  );
};

IconWalletConnected16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWalletConnected16;

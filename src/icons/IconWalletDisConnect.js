import React from 'react';
import PropTypes from 'prop-types';

const IconWalletDisConnect = props => {
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
        d="M17.657 14.828l-1.414-1.414L17.657 12A4 4 0 1012 6.343l-1.414 1.414-1.414-1.414 1.414-1.414a6 6 0 018.485 8.485l-1.414 1.414zm-2.828 2.829l-1.415 1.414a6 6 0 01-8.485-8.485l1.414-1.414 1.414 1.414L6.343 12A4 4 0 0012 17.657l1.414-1.414 1.415 1.414zm0-9.9l1.414 1.415-7.071 7.07-1.415-1.414 7.072-7.07zM5.775 2.293l1.932-.518L8.743 5.64l-1.932.518-1.036-3.864zm9.483 16.068l1.932-.518 1.035 3.864-1.932.518-1.035-3.864zM2.293 5.775l3.864 1.036-.518 1.931-3.864-1.035.518-1.932zm16.068 9.483l3.864 1.035-.518 1.932-3.864-1.036.518-1.931z"
        fill="currentColor"
      />
    </svg>
  );
};

IconWalletDisConnect.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWalletDisConnect;

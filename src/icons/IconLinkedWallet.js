import React from 'react';
import PropTypes from 'prop-types';

const IconLinkedWallet = props => {
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
        d="M17.657 14.828l-1.415-1.414L17.657 12A4 4 0 1012 6.343l-1.414 1.414L9.17 6.343l1.415-1.414a6 6 0 018.485 8.485l-1.414 1.414zm-2.829 2.829l-1.414 1.414a6 6 0 01-8.485-8.485l1.414-1.414 1.414 1.414L6.343 12A4 4 0 0012 17.657l1.414-1.415 1.414 1.415zm0-9.9l1.415 1.415-7.072 7.07-1.414-1.414 7.071-7.07z"
        fill="currentColor"
      />
    </svg>
  );
};

IconLinkedWallet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconLinkedWallet;

import React from 'react';
import PropTypes from 'prop-types';

const IconCancelListing = props => {
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
        d="M12 22v-2H5V4h10v4h4v5h2V7l-5-5H3.998A.995.995 0 003 2.992v18.016a1 1 0 00.993.992H12zm9.536-.879L19.414 19l2.122-2.121-1.415-1.415-2.12 2.122-2.122-2.122-1.414 1.415 2.12 2.12-2.12 2.122 1.414 1.414L18 20.415l2.121 2.12 1.415-1.414z"
        fill="currentColor"
      />
      <path d="M13 15v-2H8v2h5zM16 11V9H8v2h8z" fill="currentColor" />
    </svg>
  );
};

IconCancelListing.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconCancelListing;

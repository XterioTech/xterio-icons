import React from 'react';
import PropTypes from 'prop-types';

const IconDeposit = props => {
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
        d="M13 12.5l2.5-2.5H18l-6 6-6-6h2.5l2.5 2.5V3h2v9.5zM4 19h16v-7h2v8a1 1 0 01-1 1H3a1 1 0 01-1-1v-8h2v7z"
        fill="currentColor"
      />
    </svg>
  );
};

IconDeposit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconDeposit;

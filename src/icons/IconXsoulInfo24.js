import React from 'react';
import PropTypes from 'prop-types';

const IconXsoulInfo24 = props => {
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
        d="M14 4a2 2 0 11-4 0 2 2 0 014 0zM9 9h3a1 1 0 011 1v11h2v2H9v-2h2V11H9V9z"
        fill="currentColor"
      />
    </svg>
  );
};

IconXsoulInfo24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconXsoulInfo24;

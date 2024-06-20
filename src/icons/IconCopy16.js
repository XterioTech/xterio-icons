import React from 'react';
import PropTypes from 'prop-types';

const IconCopy16 = props => {
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
        d="M10.25 3.25H4.69L2.75 5.19v5.56h1.5V5.81l1.06-1.06h4.94v-1.5zM11 11.5H7V7.621l.121-.121H11v4zM5.5 7l1-1h6v7h-7V7z"
        fill="currentColor"
      />
    </svg>
  );
};

IconCopy16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconCopy16;

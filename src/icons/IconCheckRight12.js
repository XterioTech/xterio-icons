import React from 'react';
import PropTypes from 'prop-types';

const originFill = 'normal';

const IconCheckRight12 = props => {
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
      <svg>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.354 4.354l-5 5a.5.5 0 01-.708 0l-3-3 .708-.708L5 8.293l4.646-4.647.708.708z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconCheckRight12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconCheckRight12;

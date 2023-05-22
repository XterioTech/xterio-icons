import React from 'react';
import PropTypes from 'prop-types';

const IconArrow12 = props => {
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
        d="M6 7.293l3.646-3.647.707.708-4 4a.5.5 0 01-.707 0l-4-4 .708-.708L6 7.293z"
        fill="currentColor"
      />
    </svg>
  );
};

IconArrow12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconArrow12;

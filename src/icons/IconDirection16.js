import React from 'react';
import PropTypes from 'prop-types';

const IconDirection16 = props => {
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
        d="M9.071 14.657l6.364-6.364-1.414-1.414-4.657 4.657v-9.9h-2v9.9L2.707 6.879 1.293 8.293l6.364 6.364a1 1 0 001.414 0z"
        fill="currentColor"
      />
    </svg>
  );
};

IconDirection16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconDirection16;

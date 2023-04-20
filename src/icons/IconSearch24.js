import React from 'react';
import PropTypes from 'prop-types';

const IconSearch24 = props => {
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
      <svg>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 11a6 6 0 11-12 0 6 6 0 0112 0zm-1.094 6.32a8 8 0 111.414-1.414l3.594 3.594-1.414 1.414-3.594-3.594z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconSearch24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSearch24;

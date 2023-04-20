import React from 'react';
import PropTypes from 'prop-types';

const originFill = 'normal';

const IconChecked16 = props => {
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
      <svg>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.207 5.707l-6.5 6.5a1 1 0 01-1.414 0l-4-4 1.414-1.414L7 10.086l5.793-5.793 1.414 1.414z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconChecked16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconChecked16;

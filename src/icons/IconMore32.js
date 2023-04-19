import React from 'react';
import PropTypes from 'prop-types';

const IconMore32 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
      style={{ color }}
      width={size || '32'}
      height={size || '32'}
      viewBox="0 0 32 32"
    >
      <svg>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18 8a2 2 0 11-4 0 2 2 0 014 0zm0 8a2 2 0 11-4 0 2 2 0 014 0zm-2 10a2 2 0 100-4 2 2 0 000 4z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconMore32.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconMore32;

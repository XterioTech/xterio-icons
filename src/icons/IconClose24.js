import React from 'react';
import PropTypes from 'prop-types';

const originFill = 'normal';

const IconClose24 = props => {
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
          d="M13.414 12l6-6L18 4.586l-6 6-6-6L4.586 6l6 6-6 6L6 19.414l6-6 6 6L19.414 18l-6-6z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconClose24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconClose24;

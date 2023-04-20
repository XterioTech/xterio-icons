import React from 'react';
import PropTypes from 'prop-types';

const originFill = 'normal';

const IconConnect80 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '80'}
      height={size || '80'}
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <svg>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M62 21H18v21h-5V16h54v49H36v-5h26v-8H43V29h19v-8zm0 13v13H48V34h14zm-3 4h-7v5h6l1-5zM13 52v-5c9.941 0 18 8.059 18 18h-5c0-7.18-5.82-13-13-13zm0 8a5 5 0 015 5h-5v-5z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconConnect80.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconConnect80;

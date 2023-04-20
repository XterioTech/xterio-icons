import React from 'react';
import PropTypes from 'prop-types';

const originFill = 'normal';

const IconNftAmount16 = props => {
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
          d="M8 1.728l5.5 3.142v6.26L8 14.271 2.5 11.13V4.87L8 1.728zM15 4v8l-7 4-7-4V4l7-4 7 4zm-7-.798L4.8 5.011 8 6.82l3.2-1.81L8 3.203z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconNftAmount16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconNftAmount16;

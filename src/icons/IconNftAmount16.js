import React from 'react';
import PropTypes from 'prop-types';

const IconNftAmount16 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 1.728l5.5 3.142v6.26L8 14.271 2.5 11.13V4.87L8 1.728zM15 4v8l-7 4-7-4V4l7-4 7 4zm-7-.798L4.8 5.011 8 6.82l3.2-1.81L8 3.203z"
        />
      </svg>
    </svg>
  );
};

IconNftAmount16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconNftAmount16.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconNftAmount16;

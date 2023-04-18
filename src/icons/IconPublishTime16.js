import React from 'react';
import PropTypes from 'prop-types';

const IconPublishTime16 = props => {
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
          d="M8 14A6 6 0 108 2a6 6 0 000 12z"
          stroke="#FEFEFE"
          strokeWidth="2"
        />
        <path
          d="M8 5v3h3"
          stroke="#FEFEFE"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </svg>
  );
};

IconPublishTime16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconPublishTime16.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconPublishTime16;

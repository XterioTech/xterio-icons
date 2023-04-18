import React from 'react';
import PropTypes from 'prop-types';

const IconClose16 = props => {
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
          d="M8 6.586l-4-4L2.586 4l4 4-4 4L4 13.414l4-4 4 4L13.414 12l-4-4 4-4L12 2.586l-4 4z"
        />
      </svg>
    </svg>
  );
};

IconClose16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconClose16.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconClose16;

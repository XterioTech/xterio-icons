import React from 'react';
import PropTypes from 'prop-types';

const IconClose16 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
      style={{ color }}
      width={size || '16'}
      height={size || '16'}
      viewBox="0 0 16 16"
    >
      <svg>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 6.586l-4-4L2.586 4l4 4-4 4L4 13.414l4-4 4 4L13.414 12l-4-4 4-4L12 2.586l-4 4z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconClose16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconClose16;

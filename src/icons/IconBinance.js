import React from 'react';
import PropTypes from 'prop-types';

const IconBinance = props => {
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
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.79 12.4l-1.886 1.886L0 12.4l1.903-1.903L3.79 12.4zM8.4 7.79l3.248 3.248 1.904-1.903L8.4 4 3.248 9.152l1.904 1.903L8.4 7.79zm6.497 2.707L13.01 12.4l1.904 1.903 1.902-1.903-1.92-1.903zM8.4 17.01l-3.248-3.265-1.904 1.904L8.4 20.8l5.152-5.152-1.904-1.903L8.4 17.01zm0-2.723l1.903-1.904L8.4 10.497 6.497 12.4 8.4 14.286v.001z"
          fill="#F6D658"
        />
      </svg>
    </svg>
  );
};

IconBinance.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconBinance;

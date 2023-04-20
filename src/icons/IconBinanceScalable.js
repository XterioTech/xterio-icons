import React from 'react';
import PropTypes from 'prop-types';

const originFill = 'colorful';

const IconBinanceScalable = props => {
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
          d="M7.39 12l-1.886 1.887L3.6 12l1.903-1.903L7.389 12zM12 7.39l3.248 3.248 1.904-1.903L12 3.6 6.848 8.752l1.904 1.903L12 7.39zm6.496 2.707L16.61 12l1.903 1.903L20.416 12l-1.92-1.903zM12 16.61l-3.248-3.264-1.904 1.903L12 20.4l5.152-5.152-1.904-1.902L12 16.61zm0-2.723l1.903-1.904L12 10.097 10.096 12 12 13.887z"
          fill="#F6D658"
        />
      </svg>
    </svg>
  );
};

IconBinanceScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconBinanceScalable;

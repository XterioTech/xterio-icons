import React from 'react';
import PropTypes from 'prop-types';

const IconPolygonScalable = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="21.3330078125"
      height="24"
      viewBox="0 0 21.3330078125 24"
    >
      <svg width="22" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.667.92l9.595 5.54v11.08l-9.595 5.54-9.595-5.54V6.46L10.667.92zM17.595 8l-6.928-4L3.74 8v8l6.928 4 6.928-4V8z"
        />
        <path d="M10.666 4l6.929 4v8l-6.928 4-6.929-4V8l6.928-4z" />
      </svg>
    </svg>
  );
};

IconPolygonScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconPolygonScalable.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconPolygonScalable;

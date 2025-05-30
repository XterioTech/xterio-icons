import React from 'react';
import PropTypes from 'prop-types';

const IconPoints = props => {
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
      <path
        d="M19.467 8.694l.246-.566a4.363 4.363 0 012.22-2.25l.759-.339a.53.53 0 000-.963l-.717-.319a4.366 4.366 0 01-2.251-2.326l-.253-.611a.506.506 0 00-.942 0l-.253.61a4.366 4.366 0 01-2.25 2.327l-.718.32a.53.53 0 000 .962l.76.338a4.363 4.363 0 012.219 2.251l.246.566c.18.414.753.414.934 0zM5 6a1 1 0 00-.8.4l-3 4a1 1 0 00.057 1.269l9 10a1 1 0 001.486 0l9-10-1.486-1.338L11 19.505l-7.707-8.563L5.5 8H14V6H5z"
        fill="currentColor"
      />
    </svg>
  );
};

IconPoints.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconPoints;

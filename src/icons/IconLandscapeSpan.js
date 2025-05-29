import React from 'react';
import PropTypes from 'prop-types';

const IconLandscapeSpan = props => {
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
        d="M11.086 4L9.257 2.172 10.672.757 14.914 5l-4.242 4.243-1.415-1.415L11.086 6H8.5a3 3 0 00-3 3v4h-2V9a5 5 0 015-5h2.586zM9.5 11a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1h-10a1 1 0 01-1-1V11zm2 1v8h8v-8h-8z"
        fill="currentColor"
      />
    </svg>
  );
};

IconLandscapeSpan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconLandscapeSpan;

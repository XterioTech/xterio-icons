import React from 'react';
import PropTypes from 'prop-types';

const IconTakephoto24 = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.465 4h5.153l1 2H21v14H3V7h7v2H5v9h14V8h-3.618l-1-2h-2.847l-.703 1.055-1.664-1.11L10.465 4z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6H4V4h4v2zM12 11a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z"
        fill="currentColor"
      />
    </svg>
  );
};

IconTakephoto24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconTakephoto24;

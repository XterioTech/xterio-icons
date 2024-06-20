import React from 'react';
import PropTypes from 'prop-types';

const IconGallery24 = props => {
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
        d="M20 6H4v12h16v-1.754a5.708 5.708 0 00-7.553-2.352l-6 3-.894-1.788 6-3A7.71 7.71 0 0120 13.13V6zM2 4v16h20V4H2zm5.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill="currentColor"
      />
    </svg>
  );
};

IconGallery24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconGallery24;

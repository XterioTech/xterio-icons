import React from 'react';
import PropTypes from 'prop-types';

const IconGallery = props => {
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
        d="M20 13c-1.678 0-3.249.46-4.593 1.259A14.984 14.984 0 0118.147 19H20v-6zm-3.996 6C14.044 14.302 9.408 11 4 11v8h12.004zM4 9c3.83 0 7.323 1.435 9.974 3.796A10.949 10.949 0 0120 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993A1 1 0 012.992 3H6V1h2v4H4v4zm14-8v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
        fill="currentColor"
      />
    </svg>
  );
};

IconGallery.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconGallery;

import React from 'react';
import PropTypes from 'prop-types';

const IconSupport24 = props => {
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
        d="M12 5a6 6 0 00-6 6v9H3v-6h1v-3a8 8 0 1116 0v3h1v6h-8v-3h2v1h3v-7a6 6 0 00-6-6z"
        fill="currentColor"
      />
    </svg>
  );
};

IconSupport24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSupport24;

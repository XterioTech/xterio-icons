import React from 'react';
import PropTypes from 'prop-types';

const IconProfileSelect = props => {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM10 8H8v3h2V8zm2 10a6 6 0 006-6h-2a4 4 0 01-4 4v2zm3.316-8.051l-3 1-.632-1.898 3-1 .632 1.898z"
        fill="currentColor"
      />
    </svg>
  );
};

IconProfileSelect.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconProfileSelect;

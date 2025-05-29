import React from 'react';
import PropTypes from 'prop-types';

const IconArrow = props => {
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
        d="M12 13.171l4.95-4.95 1.414 1.415L12 16 5.636 9.636 7.05 8.222l4.95 4.95z"
        fill="currentColor"
      />
    </svg>
  );
};

IconArrow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconArrow;

import React from 'react';
import PropTypes from 'prop-types';

const IconClose = props => {
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
        d="M12 10.586l4.95-4.95 1.414 1.415-4.95 4.95 4.95 4.95-1.415 1.414-4.95-4.95-4.949 4.95-1.414-1.415 4.95-4.95-4.95-4.95L7.05 5.638l4.95 4.95z"
        fill="currentColor"
      />
    </svg>
  );
};

IconClose.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconClose;

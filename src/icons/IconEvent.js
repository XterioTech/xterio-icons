import React from 'react';
import PropTypes from 'prop-types';

const IconEvent = props => {
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
        d="M12.382 3a1 1 0 01.894.553L14 5h6a1 1 0 011 1v11a1 1 0 01-1 1h-6.382a1 1 0 01-.894-.553L12 16H5v6H3V3h9.382zm-.618 2H5v9h8.236l1 2H19V7h-6.236l-1-2z"
        fill="currentColor"
      />
    </svg>
  );
};

IconEvent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconEvent;

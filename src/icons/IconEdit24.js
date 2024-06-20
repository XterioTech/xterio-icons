import React from 'react';
import PropTypes from 'prop-types';

const IconEdit24 = props => {
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
        d="M12.232 5.369l3.464 2-4.086 7.077-2.732.732-.732-2.732 4.086-7.077zM7.464 17.627l5.464-1.464 5.5-9.526-6.928-4L6 12.163l1.464 5.464zM5 21h14v-2H5v2z"
        fill="currentColor"
      />
    </svg>
  );
};

IconEdit24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconEdit24;

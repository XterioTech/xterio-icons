import React from 'react';
import PropTypes from 'prop-types';

const originFill = 'normal';

const IconSteamScalable = props => {
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
      <svg>
        <path
          d="M11.97 2.4c-5.01 0-9.18 3.9-9.54 8.82l5.13 2.13c.45-.3.96-.45 1.53-.45h.15l2.28-3.33v-.03c0-1.98 1.62-3.63 3.63-3.63s3.63 1.62 3.63 3.63-1.62 3.63-3.63 3.63h-.09l-3.27 2.34v.12c0 1.5-1.23 2.73-2.73 2.73-1.32 0-2.43-.96-2.67-2.19l-3.66-1.56c1.14 4.02 4.86 6.99 9.24 6.99 5.31 0 9.6-4.29 9.6-9.6s-4.29-9.6-9.6-9.6z"
          fill="currentColor"
        />
        <path
          d="M8.43 16.98l-1.17-.48c.21.45.57.81 1.05.99 1.02.45 2.22-.06 2.67-1.08.21-.51.21-1.05 0-1.56s-.6-.9-1.08-1.11c-.48-.21-1.02-.18-1.5-.03l1.23.51c.75.33 1.14 1.2.81 1.95-.36.75-1.23 1.11-2.01.81zm9.12-7.47a2.44 2.44 0 00-2.43-2.43 2.44 2.44 0 00-2.43 2.43 2.44 2.44 0 002.43 2.43 2.44 2.44 0 002.43-2.43zm-4.2 0c0-1.02.81-1.8 1.8-1.8 1.02 0 1.8.81 1.8 1.8 0 1.02-.81 1.8-1.8 1.8-.99.03-1.8-.78-1.8-1.8z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconSteamScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSteamScalable;

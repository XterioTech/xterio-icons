import React from 'react';
import PropTypes from 'prop-types';

const IconOwners16 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '16'}
      height={size || '16'}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <svg>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.062 3.11A2 2 0 0112.5 4.5v.254c0 .452-.18.885-.499 1.204l-.295.296a1.84 1.84 0 00-.54 1.301c0 1.076.632 2.052 1.613 2.494l2.016.907.41-.912-2.016-.907a1.734 1.734 0 01-1.022-1.582.84.84 0 01.246-.594l.295-.295a2.703 2.703 0 00.792-1.912V4.5a3 3 0 00-5.277-1.953c.3.158.58.347.84.563zm-5.34 3.668a2.278 2.278 0 014.556 0v.282c0 .517-.205 1.012-.57 1.378l-.329.328a1.99 1.99 0 00-.583 1.407c0 1.173.689 2.238 1.759 2.72l2.24 1.007.41-.912-2.24-1.008a1.982 1.982 0 01-1.169-1.807.99.99 0 01.29-.7l.328-.328a2.948 2.948 0 00.864-2.085v-.282a3.278 3.278 0 10-6.556 0v.282c0 .782.31 1.532.864 2.085l.328.328a.99.99 0 01.29.7c0 .78-.458 1.487-1.17 1.807l-2.24 1.008.411.912 2.24-1.008a2.983 2.983 0 001.759-2.72 1.99 1.99 0 00-.583-1.406l-.328-.328a1.948 1.948 0 01-.57-1.378v-.282z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconOwners16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconOwners16;

import React from 'react';
import PropTypes from 'prop-types';

const IconResetPassword120 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '120'}
      height={size || '120'}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <svg>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M38.5 41c0-11.874 9.626-21.5 21.5-21.5S81.5 29.126 81.5 41v5.38a34.991 34.991 0 00-7-4.245V41c0-8.008-6.492-14.5-14.5-14.5S45.5 32.992 45.5 41v9.629A27.371 27.371 0 0160 46.5c15.188 0 27.5 12.312 27.5 27.5S75.188 101.5 60 101.5 32.5 89.188 32.5 74a27.384 27.384 0 016-17.148V41zm1 33c0-11.322 9.178-20.5 20.5-20.5S80.5 62.678 80.5 74 71.322 94.5 60 94.5 39.5 85.322 39.5 74zM60 65.5a8.5 8.5 0 00-3.5 16.248V87l7-1.867v-3.385A8.5 8.5 0 0060 65.5z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconResetPassword120.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconResetPassword120;

import React from 'react';
import PropTypes from 'prop-types';

const originFill = 'colorful';

const IconGoogleScalable = props => {
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
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.076 14.901l2.354-1.8a4.154 4.154 0 01-.207-1.301c0-.455.073-.892.207-1.301l-2.354-1.8a7.006 7.006 0 00-.717 3.101c0 1.115.258 2.168.717 3.101z"
          fill="#FBBC05"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.431 10.499a4.128 4.128 0 013.93-2.835c.986 0 1.877.35 2.577.922l2.036-2.036c-1.24-1.082-2.832-1.75-4.614-1.75A6.98 6.98 0 006.077 8.7l2.354 1.8z"
          fill="#EA4335"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.076 14.9a6.98 6.98 0 006.285 3.9c3.5 0 6.681-2.545 6.681-7 0-.414-.063-.859-.159-1.273h-6.522v2.705h3.754c-.35 1.718-1.813 2.704-3.754 2.704a4.128 4.128 0 01-3.931-2.84l-2.354 1.803z"
          fill="#34A853"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.36 10.527h6.523c.096.414.16.86.16 1.273 0 2.282-.836 4.063-2.12 5.257l-2.236-1.73c.731-.461 1.24-1.173 1.428-2.095H12.36v-2.705z"
          fill="#4285F4"
        />
      </svg>
    </svg>
  );
};

IconGoogleScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconGoogleScalable;

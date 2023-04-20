import React from 'react';
import PropTypes from 'prop-types';

const originFill = 'normal';

const IconUser72 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '72'}
      height={size || '72'}
      viewBox="0 0 72 72"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <svg>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36 12.5c-6.35 0-11.5 5.149-11.5 11.5v1.524a9.72 9.72 0 002.847 6.873l1.772 1.772a11.544 11.544 0 013.382 8.163 16.906 16.906 0 01-9.969 15.417l-8.226 3.702a19.647 19.647 0 00-5.83 4.024L6 67.95 1.05 63l2.475-2.475a26.649 26.649 0 017.907-5.458l8.227-3.702a9.906 9.906 0 005.84-9.033c0-1.205-.478-2.361-1.33-3.213l-1.772-1.772A16.72 16.72 0 0117.5 25.524V24c0-10.217 8.283-18.5 18.5-18.5 10.218 0 18.5 8.283 18.5 18.5v1.524a16.72 16.72 0 01-4.897 11.823l-1.772 1.772a4.544 4.544 0 00-1.33 3.213 9.906 9.906 0 005.84 9.033l8.227 3.702a26.65 26.65 0 017.907 5.458L70.95 63 66 67.95l-2.474-2.475a19.647 19.647 0 00-5.83-4.024l-8.227-3.702a16.906 16.906 0 01-9.968-15.417c0-3.062 1.216-5.998 3.38-8.163l1.773-1.772a9.72 9.72 0 002.846-6.873V24c0-6.351-5.148-11.5-11.5-11.5z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconUser72.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconUser72;

import React from 'react';
import PropTypes from 'prop-types';

const IconMacScalable = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
      style={{ color }}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
    >
      <svg>
        <path
          d="M21 4.2v16H3v-16h18zm-1.556 1.778H11.92c-.613 1.757-.92 4.128-.92 7.11h2.667c-.103.819-.134 1.67-.095 2.558 1.09-.187 2.403-.69 3.58-1.52l1.008 1.48c-1.46.973-2.936 1.582-4.423 1.816.046.33.1.662.163 1h5.544V5.978zm-11.95 8.15l-.987 1.478c1.917 1.278 3.864 1.927 5.826 1.927v-1.778c-1.593 0-3.201-.536-4.84-1.628zm9.284-6.373a.889.889 0 01.889.89v.888a.888.888 0 11-1.778 0v-.889a.89.89 0 01.889-.889zm-8.89 0a.892.892 0 00-.888.89v.888a.888.888 0 101.778 0v-.889a.89.89 0 00-.89-.889z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconMacScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconMacScalable;

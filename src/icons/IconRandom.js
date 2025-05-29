import React from 'react';
import PropTypes from 'prop-types';

const IconRandom = props => {
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
        d="M19.368 8.237l-5.789 3.618v7.69l5.79-3.618v-7.69zm-13.894 0l5.79 3.618v7.69l-5.79-3.618v-7.69zM3.158 6.789L12.42 1l9.263 5.79v10.42L12.421 23l-9.263-5.79V6.79zm4.37 0l4.893 3.06 4.894-3.06-4.894-3.058-4.894 3.058zm8.367 8.106a1.158 1.158 0 100-2.316 1.158 1.158 0 000 2.316zm-6.948-2.316a1.158 1.158 0 11-2.315 0 1.158 1.158 0 012.315 0zm0 4.631a1.158 1.158 0 100-2.315 1.158 1.158 0 000 2.316z"
        fill="currentColor"
      />
    </svg>
  );
};

IconRandom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconRandom;

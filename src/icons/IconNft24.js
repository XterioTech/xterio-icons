import React from 'react';
import PropTypes from 'prop-types';

const IconNft24 = props => {
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.504 1.53a1 1 0 01.992 0l8.4 4.8a1 1 0 01.504.868v9.6a1 1 0 01-.504.869l-8.4 4.8a1 1 0 01-.992 0l-8.4-4.8a1 1 0 01-.504-.869v-9.6a1 1 0 01.503-.868l8.4-4.8zM4.6 7.78v8.44l7.4 4.228 7.4-4.229v-8.44L12 3.55 4.6 7.78zm8.4 4.758l3.155-2.103a1 1 0 10-1.11-1.664l-3.044 2.03-3.046-2.03a1 1 0 00-1.11 1.664L11 12.537V15.6a1 1 0 102 0v-3.063z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconNft24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconNft24;

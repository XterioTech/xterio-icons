import React from 'react';
import PropTypes from 'prop-types';

const IconNft24 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.504 1.53a1 1 0 01.992 0l8.4 4.8a1 1 0 01.504.868v9.6a1 1 0 01-.504.869l-8.4 4.8a1 1 0 01-.992 0l-8.4-4.8a1 1 0 01-.504-.869v-9.6a1 1 0 01.503-.868l8.4-4.8zM4.6 7.78v8.44l7.4 4.228 7.4-4.229v-8.44L12 3.55 4.6 7.78z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 11a1 1 0 011 1v3.6a1 1 0 11-2 0V12a1 1 0 011-1z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.568 9.047a1 1 0 011.387-.277l3.046 2.03 3.045-2.03a1 1 0 111.11 1.664l-3.6 2.4a1 1 0 01-1.11 0l-3.6-2.4a1 1 0 01-.278-1.387z"
        />
      </svg>
    </svg>
  );
};

IconNft24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconNft24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconNft24;

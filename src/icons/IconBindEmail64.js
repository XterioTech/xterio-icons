import React from 'react';
import PropTypes from 'prop-types';

const originFill = 'normal';

const IconBindEmail64 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '64'}
      height={size || '64'}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <svg>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 17h44v14h5V12H5v40h22v-5H10V17zm32 38.5a9.5 9.5 0 010-19h3l-2 5h-1a4.5 4.5 0 100 9h3v5h-3zm11-19a9.5 9.5 0 010 19h-3l2-5h1a4.5 4.5 0 100-9h-3v-5h3zm-10 12h9v-5h-9v5zM19.075 22.743l-2.15 4.514L32 34.436l15.075-7.179-2.15-4.514L32 28.898l-12.925-6.155z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconBindEmail64.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconBindEmail64;

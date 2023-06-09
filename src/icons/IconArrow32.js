import React from 'react';
import PropTypes from 'prop-types';

const IconArrow32 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '32'}
      height={size || '32'}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.293 20.707l-8-8 1.414-1.414L16 18.586l7.293-7.293 1.414 1.414-8 8a1 1 0 01-1.414 0z"
        fill="currentColor"
      />
    </svg>
  );
};

IconArrow32.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconArrow32;

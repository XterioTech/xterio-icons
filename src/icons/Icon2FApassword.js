import React from 'react';
import PropTypes from 'prop-types';

const Icon2FApassword = props => {
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
        d="M10.758 11.828l7.849-7.849 1.414 1.414-1.414 1.415 2.474 2.474-1.414 1.415-2.475-2.475-1.414 1.414 2.121 2.121-1.414 1.415-2.121-2.122-2.192 2.192a5.002 5.002 0 01-7.708 6.293 5 5 0 016.294-7.707zm-.637 6.293A3 3 0 105.88 13.88a3 3 0 004.242 4.242z"
        fill="currentColor"
      />
    </svg>
  );
};

Icon2FApassword.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Icon2FApassword;

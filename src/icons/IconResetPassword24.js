import React from 'react';
import PropTypes from 'prop-types';

const IconResetPassword24 = props => {
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
          d="M6 6a6 6 0 1112 0v2.083a9.924 9.924 0 00-2-1.178V6a4 4 0 00-8 0V9.07a8 8 0 11-2 1.638V6zm0 10a6 6 0 1112 0 6 6 0 01-12 0zm6-2a2 2 0 00-1 3.732V19l2-.5v-.768A2 2 0 0012 14z"
        />
      </svg>
    </svg>
  );
};

IconResetPassword24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconResetPassword24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconResetPassword24;

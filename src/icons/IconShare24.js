import React from 'react';
import PropTypes from 'prop-types';

const IconShare24 = props => {
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
          d="M13.333 11.571l-7.555 5.572.889-3.857L4 9.857 20 6l-5.333 12L12 16.286"
          stroke="#FEFEFE"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </svg>
  );
};

IconShare24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconShare24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconShare24;

import React from 'react';
import PropTypes from 'prop-types';

const IconFilter16 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 3V2H2v3.5l.4.3L6 8.5v5.977l1.371-.549 2-.8.629-.251V8.5l3.6-2.7.4-.3V3z"
          stroke="#FEFEFE"
          strokeWidth="2"
        />
      </svg>
    </svg>
  );
};

IconFilter16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconFilter16.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconFilter16;

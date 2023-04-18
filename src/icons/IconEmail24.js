import React from 'react';
import PropTypes from 'prop-types';

const IconEmail24 = props => {
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
          d="M3.334 6h17.333v12H3.334V6zm-2 14V4h21.333v16H1.334zM6.83 8.164L5.97 9.97 12 12.84l6.03-2.87-.86-1.806L12 10.626 6.83 8.164z"
        />
      </svg>
    </svg>
  );
};

IconEmail24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconEmail24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconEmail24;

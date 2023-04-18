import React from 'react';
import PropTypes from 'prop-types';

const IconPlus12 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="12"
      height="12"
      viewBox="0 0 12 12"
    >
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 5H2v2h8V5z" />
        <path d="M5 2v8h2V2H5z" />
        <path d="M7 5h1L7 7V5z" />
      </svg>
    </svg>
  );
};

IconPlus12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconPlus12.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconPlus12;

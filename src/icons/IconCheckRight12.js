import React from 'react';
import PropTypes from 'prop-types';

const IconCheckRight12 = props => {
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
        <path d="M2 6l3 3 5-5" stroke="#FEFEFE" strokeLinejoin="round" />
      </svg>
    </svg>
  );
};

IconCheckRight12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconCheckRight12.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconCheckRight12;

import React from 'react';
import PropTypes from 'prop-types';

const IconNodata80 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="80"
      height="80"
      viewBox="0 0 80 80"
    >
      <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 28.044L40 19l16 9.044-16 9.043-16-9.044z" />
        <path
          d="M14 54.84V25.16l26-14.857 26 14.858v29.678L40 69.697 14 54.838z"
          stroke="#FEFEFE"
          strokeWidth="4"
        />
      </svg>
    </svg>
  );
};

IconNodata80.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconNodata80.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconNodata80;

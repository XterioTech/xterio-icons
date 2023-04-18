import React from 'react';
import PropTypes from 'prop-types';

const IconClose24 = props => {
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
          d="M19.414 6L6 19.414 4.586 18 18 4.586 19.414 6z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.586 6L18 19.414 19.414 18 6 4.586 4.586 6z"
        />
      </svg>
    </svg>
  );
};

IconClose24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconClose24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconClose24;

import React from 'react';
import PropTypes from 'prop-types';

const IconArrow24 = props => {
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
          d="M12.707 15.707a1 1 0 01-1.414 0L4.586 9 6 7.586l6 6 6-6L19.414 9l-6.707 6.707z"
        />
      </svg>
    </svg>
  );
};

IconArrow24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconArrow24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconArrow24;
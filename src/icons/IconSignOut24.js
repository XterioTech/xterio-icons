import React from 'react';
import PropTypes from 'prop-types';

const IconSignOut24 = props => {
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
          d="M13.423 2.102a10 10 0 015.101 2.32L17.21 5.948a7.984 7.984 0 10-.117 12.2l1.285 1.553a10 10 0 11-4.954-17.6zM21 11H9v2h9.586l-2 2L18 16.414l3.707-3.707A1 1 0 0021 11z"
        />
      </svg>
    </svg>
  );
};

IconSignOut24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconSignOut24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconSignOut24;

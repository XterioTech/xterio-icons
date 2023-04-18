import React from 'react';
import PropTypes from 'prop-types';

const IconArrow12 = props => {
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
        <path d="M3 5l3 3 3-3" stroke="#FEFEFE" strokeLinejoin="round" />
      </svg>
    </svg>
  );
};

IconArrow12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconArrow12.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconArrow12;

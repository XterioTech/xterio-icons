import React from 'react';
import PropTypes from 'prop-types';

const IconMore24 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <circle cx="6.5" cy="11.5" r="1.5" fill="#FEFEFE" />
      <circle cx="12.5" cy="11.5" r="1.5" fill="#FEFEFE" />
      <circle cx="18.5" cy="11.5" r="1.5" fill="#FEFEFE" />
    </svg>
  );
};

IconMore24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconMore24;

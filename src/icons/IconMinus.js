import React from 'react';
import PropTypes from 'prop-types';

const IconMinus = props => {
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
      <path d="M5 11v2h14v-2H5z" fill="currentColor" />
    </svg>
  );
};

IconMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconMinus;

import React from 'react';
import PropTypes from 'prop-types';

const IconMinus16 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '16'}
      height={size || '16'}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <svg>
        <path d="M2 7h12l-1 2H2V7z" fill="currentColor" />
      </svg>
    </svg>
  );
};

IconMinus16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconMinus16;

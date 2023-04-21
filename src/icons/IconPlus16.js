import React from 'react';
import PropTypes from 'prop-types';

const IconPlus16 = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2h2v12H7V9H2V7h5V2zm3 7h4V7h-3l-1 2z"
        fill="currentColor"
      />
    </svg>
  );
};

IconPlus16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconPlus16;

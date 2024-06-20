import React from 'react';
import PropTypes from 'prop-types';

const IconTips24 = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20a8 8 0 100-16 8 8 0 000 16zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM11 8V6h2v2h-2zm2 3a1 1 0 00-1.352-.936l-2 .75.703 1.872.649-.243V17a1 1 0 001.35.936l2-.75-.702-1.872-.648.243V11z"
        fill="currentColor"
      />
    </svg>
  );
};

IconTips24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconTips24;

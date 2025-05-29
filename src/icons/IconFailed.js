import React from 'react';
import PropTypes from 'prop-types';

const IconFailed = props => {
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
        d="M12 10.303L8.606 6.909 6.909 8.606 10.303 12l-3.394 3.394 1.697 1.697L12 13.697l3.394 3.394 1.697-1.697L13.697 12l3.394-3.394-1.697-1.697L12 10.303z"
        fill="currentColor"
      />
    </svg>
  );
};

IconFailed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconFailed;

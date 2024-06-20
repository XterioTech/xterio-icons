import React from 'react';
import PropTypes from 'prop-types';

const IconSubscribed24 = props => {
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
        d="M20 2H4v20.723l8-4.571 8 4.571V2zm-9 12.414l5.707-5.707-1.414-1.414L11 11.586 8.707 9.293l-1.414 1.414L11 14.414z"
        fill="currentColor"
      />
    </svg>
  );
};

IconSubscribed24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSubscribed24;

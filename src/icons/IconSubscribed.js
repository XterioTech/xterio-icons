import React from 'react';
import PropTypes from 'prop-types';

const IconSubscribed = props => {
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
        d="M20 22.724l-8-4.573-8 4.573V2h16v20.724zm-9-11.138L8.707 9.293l-1.414 1.414L11 14.414l5.707-5.707-1.414-1.414L11 11.586z"
        fill="currentColor"
      />
    </svg>
  );
};

IconSubscribed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSubscribed;

import React from 'react';
import PropTypes from 'prop-types';

const IconSubscribe24 = props => {
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
        d="M14.5 2H4v20.723l8-4.571 8 4.571V11h-2v8.277l-6-3.429-6 3.429V4h8.5V2zM18 8V6h-2V4h2V2h2v2h2v2h-2v2h-2z"
        fill="currentColor"
      />
    </svg>
  );
};

IconSubscribe24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSubscribe24;

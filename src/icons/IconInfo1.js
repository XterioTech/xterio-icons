import React from 'react';
import PropTypes from 'prop-types';

const IconInfo1 = props => {
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
        d="M10.8 10.8V18h2.4v-7.2h-2.4zm0-4.8v2.4h2.4V6h-2.4z"
        fill="currentColor"
      />
    </svg>
  );
};

IconInfo1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconInfo1;

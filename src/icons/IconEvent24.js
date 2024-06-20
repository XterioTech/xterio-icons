import React from 'react';
import PropTypes from 'prop-types';

const IconEvent24 = props => {
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
        d="M6 20V2h2v1h7v2h5v10h-8v-2H8v7h2v2H4v-2h2zm2-9h6v2h4V7h-5V5H8v6z"
        fill="currentColor"
      />
    </svg>
  );
};

IconEvent24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconEvent24;

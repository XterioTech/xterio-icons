import React from 'react';
import PropTypes from 'prop-types';

const IconMessageClear = props => {
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
        d="M8.667 7H2v6.667h1.667V22H18.11l2.222-2.222v-6.111H22V7h-6.667V2H8.667v5zm11.666 5H3.667V8.667h6.666v-5h3.334v5h6.666V12zm-15 8.333v-6.666h13.334v5.42l-1.246 1.246h-3.754v-5L12 17v3.333H5.333z"
        fill="currentColor"
      />
    </svg>
  );
};

IconMessageClear.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconMessageClear;

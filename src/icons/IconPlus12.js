import React from 'react';
import PropTypes from 'prop-types';

const IconPlus12 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
      style={{ color }}
      width={size || '12'}
      height={size || '12'}
      viewBox="0 0 12 12"
    >
      <svg>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 2v3H2v2h3v3h2V7h3V5H8L7 7V2H5z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconPlus12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconPlus12;

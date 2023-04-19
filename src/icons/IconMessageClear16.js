import React from 'react';
import PropTypes from 'prop-types';

const IconMessageClear16 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
      style={{ color }}
      width={size || '16'}
      height={size || '16'}
      viewBox="0 0 16 16"
    >
      <svg>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 5H2v4h1v5h8.667L13 12.667V9h1V5h-4V2H6v3zm7 3H3V6h4V3h2v3h4v2zm-9 5V9h8v3.252l-.748.748H9v-3l-1 1v2H4z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconMessageClear16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconMessageClear16;

import React from 'react';
import PropTypes from 'prop-types';

const IconH5Menu32 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '32'}
      height={size || '32'}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <svg>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28 7H4v2h24V7zm0 8H4v2h24v-2zM4 23h24v2H4v-2z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconH5Menu32.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconH5Menu32;

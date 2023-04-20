import React from 'react';
import PropTypes from 'prop-types';

const IconMessage32 = props => {
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
          d="M17.316 6.131V3l-2.737 1.368v1.78A9.002 9.002 0 007 15.035V21l-2 4h22l-2-4v-5.964c0-4.525-3.34-8.268-7.684-8.905zm-2.424 1.992l1.066-.17 1.068.157A7.002 7.002 0 0123 15.036v6.436L23.764 23H8.236L9 21.472v-6.436a7.002 7.002 0 015.892-6.913zM21 27h-9.625L10 29h9.625L21 27z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconMessage32.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconMessage32;

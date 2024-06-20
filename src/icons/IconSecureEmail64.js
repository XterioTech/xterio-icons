import React from 'react';
import PropTypes from 'prop-types';

const IconSecureEmail64 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '64'}
      height={size || '64'}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 17h44v14h5V12H5v40h30v-5H10V17zm44 24.72l-5-1.5-5 1.5v4.75a3 3 0 001.456 2.573L49 51.169l3.544-2.126A3 3 0 0054 46.471v-4.75zM49 57l6.116-3.67A8 8 0 0059 46.47V38l-10-3-10 3v8.47a8 8 0 003.884 6.86L49 57zM19.075 22.743l-2.15 4.514L32 34.436l15.075-7.179-2.15-4.514L32 28.898l-12.925-6.155z"
        fill="currentColor"
      />
    </svg>
  );
};

IconSecureEmail64.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSecureEmail64;

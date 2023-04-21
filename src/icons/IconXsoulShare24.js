import React from 'react';
import PropTypes from 'prop-types';

const IconXsoulShare24 = props => {
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
        d="M22 6.5a4.5 4.5 0 01-7.748 3.115l-3.47 2.082a3.993 3.993 0 010 2.607l3.792 2.274A3.5 3.5 0 1114 18.566l-4.323-2.594a4 4 0 110-5.945L13.222 7.9A4.5 4.5 0 1122 6.5zM17.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM9 13a2 2 0 11-4 0 2 2 0 014 0zm8.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill="currentColor"
      />
    </svg>
  );
};

IconXsoulShare24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconXsoulShare24;

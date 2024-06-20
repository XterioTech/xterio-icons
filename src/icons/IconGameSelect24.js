import React from 'react';
import PropTypes from 'prop-types';

const IconGameSelect24 = props => {
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
        d="M4.586 4h14.828l2.555 2.554L23.079 21h-6.614l-2-3h-4.93l-2 3H.92L2.031 6.554 4.586 4zM17 12a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 100-6 3 3 0 000 6zM9 8v2h2v2H9v2H7v-2H5v-2h2V8h2z"
        fill="currentColor"
      />
    </svg>
  );
};

IconGameSelect24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconGameSelect24;

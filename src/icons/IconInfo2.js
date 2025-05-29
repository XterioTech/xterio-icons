import React from 'react';
import PropTypes from 'prop-types';

const IconInfo2 = props => {
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
        d="M12 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-3 4h2v8H9v2h6v-2h-2V8H9v2z"
        fill="currentColor"
      />
    </svg>
  );
};

IconInfo2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconInfo2;

import React from 'react';
import PropTypes from 'prop-types';

const IconArrowGradient = props => {
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
        d="M15 10.411l-8.607 8.607-1.414-1.415 8.607-8.606H6v-2h11v11h-2V10.41z"
        fill="currentColor"
      />
    </svg>
  );
};

IconArrowGradient.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconArrowGradient;

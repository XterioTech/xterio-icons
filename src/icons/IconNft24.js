import React from 'react';
import PropTypes from 'prop-types';

const IconNft24 = props => {
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
        d="M12 4.288l7 3.889v7.646l-7 3.89-7-3.89V8.177l7-3.89zM21 7v10l-9 5-9-5V7l9-5 9 5zm-9 0L7 9.5l5 2.5 5-2.5L12 7z"
        fill="currentColor"
      />
    </svg>
  );
};

IconNft24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconNft24;

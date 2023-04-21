import React from 'react';
import PropTypes from 'prop-types';

const IconShow24 = props => {
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
        d="M12 4C4 4 2 12 2 12s2 8 10 8 10-8 10-8-2-8-10-8zm-7.716 7.52c-.076.18-.137.342-.187.48A10.894 10.894 0 005.6 14.8C6.827 16.436 8.786 18 12 18c3.214 0 5.173-1.564 6.4-3.2a10.89 10.89 0 001.503-2.8A10.89 10.89 0 0018.4 9.2C17.173 7.564 15.214 6 12 6 8.786 6 6.827 7.564 5.6 9.2c-.626.834-1.05 1.68-1.316 2.32zM14 12a2 2 0 11-4 0 2 2 0 014 0zm2 0a4 4 0 11-8 0 4 4 0 018 0z"
        fill="currentColor"
      />
    </svg>
  );
};

IconShow24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconShow24;

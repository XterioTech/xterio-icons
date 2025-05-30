import React from 'react';
import PropTypes from 'prop-types';

const IconNoinvite = props => {
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
        d="M14 14.252v2.09A6 6 0 006 22H4a8 8 0 0110-7.749zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm7 6.586l2.121-2.121 1.415 1.414L20.413 19l2.121 2.121-1.414 1.415L19 20.413l-2.121 2.121-1.415-1.414L17.587 19l-2.121-2.121 1.414-1.415L19 17.587z"
        fill="currentColor"
      />
    </svg>
  );
};

IconNoinvite.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconNoinvite;

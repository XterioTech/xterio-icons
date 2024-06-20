import React from 'react';
import PropTypes from 'prop-types';

const IconQRcode16 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '16'}
      height={size || '16'}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3h2v2H3V3zM1 7V1h6v6H1zm2 4h2v2H3v-2zm-2 4V9h6v6H1zm10-6H9v2h2v2H9v2h2v-2h2v2h2v-2h-2v-2h2V9h-2v2h-2V9zm0-6h2v2h-2V3zM9 7V1h6v6H9z"
        fill="currentColor"
      />
    </svg>
  );
};

IconQRcode16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconQRcode16;

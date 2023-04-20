import React from 'react';
import PropTypes from 'prop-types';

const originFill = 'normal';

const IconLinkedWallet16 = props => {
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
      <svg>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 11h8.08L15 9.08V1H6.92L5 2.92V4h1.667l.04.04.04-.04H7v-.252L7.748 3H13v5.252L12.252 9H7V8H5v3zm6-6H2.92L1 6.92V15h8.08L11 13.08V12H9.333l-.04-.04-.04.04H9v.252L8.252 13H3V7.748L3.748 7H9v1h2V5z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconLinkedWallet16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconLinkedWallet16;

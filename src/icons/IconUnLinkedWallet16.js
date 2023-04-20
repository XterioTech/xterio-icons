import React from 'react';
import PropTypes from 'prop-types';

const IconUnLinkedWallet16 = props => {
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
          d="M5 8h1.586l1-1H3.748L3 7.748V13h5.252L9 12.252V12h.252l.04-.04.041.04H11v1.08L9.08 15H1V6.92L2.92 5h6.666l.707-.707L11 5l.293.293-6 6L5 11l-.707-.707L5 9.586V8zm3.414 3h4.667L15 9.08V1H6.92L5 2.92V4h1.667l.04.04.04-.04H7v-.252L7.748 3H13v5.252L12.252 9h-1.838l-2 2z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconUnLinkedWallet16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconUnLinkedWallet16;

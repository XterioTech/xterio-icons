import React from 'react';
import PropTypes from 'prop-types';

const IconLinkedWalletThin12 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
      style={{ color }}
      width={size || '12'}
      height={size || '12'}
      viewBox="0 0 12 12"
    >
      <svg>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.707 8H4V6h1v1h4.293L10 6.293V2H5.707L5 2.707V3H4v-.707L5.293 1H11v5.707L9.707 8z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.293 4H8v2H7V5H2.707L2 5.707V10h4.293L7 9.293V9h1v.707L6.707 11H1V5.293L2.293 4z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconLinkedWalletThin12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconLinkedWalletThin12;

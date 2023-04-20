import React from 'react';
import PropTypes from 'prop-types';

const IconUnLinkedWalletThin12 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '12'}
      height={size || '12'}
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <svg>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 1H5.293L4 2.293V3h1v-.293L5.707 2H10v4.293L9.293 7H7.56l-1 1h3.146L11 6.707V1zM3.97 8.47l4.5-4.5-.574-.574L7.293 4h-5L1 5.293V11h5.707L8 9.707V9H7v.293L6.293 10H2V5.707L2.707 5h3.586L5 6.293V6H4v1.293l-.604.603.574.574z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconUnLinkedWalletThin12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconUnLinkedWalletThin12;

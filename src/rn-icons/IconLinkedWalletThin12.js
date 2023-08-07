import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconLinkedWalletThin12 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '12'}
      height={size || '12'}
      viewBox="0 0 12 12"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.707 8H4V6h1v1h4.293L10 6.293V2H5.707L5 2.707V3H4v-.707L5.293 1H11v5.707L9.707 8z"
        fill="currentColor"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.293 4H8v2H7V5H2.707L2 5.707V10h4.293L7 9.293V9h1v.707L6.707 11H1V5.293L2.293 4z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconLinkedWalletThin12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconLinkedWalletThin12;

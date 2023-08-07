import React from 'react';
import PropTypes from 'prop-types';
import { Svg, G, Path, Defs, ClipPath } from 'react-native-svg';

const IconWalletDisConnect16 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '16'}
      height={size || '16'}
      viewBox="0 0 16 16"
      {...otherProps}
    >
      <G clipPath="url(#clip0_222_797)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.571 2.38L5.157 3.794 6.571 5.21l1.414-1.415a3 3 0 014.243 4.243l-1.414 1.414 1.414 1.415 1.414-1.415a5 5 0 00-7.07-7.07zM2.78 6.173l-1.45-1.45 1.414-1.415 9.9 9.9-1.415 1.414-1.378-1.378-.45.45a5 5 0 01-7.071-7.071l.45-.45zm5.657 5.656l-.45.45a3 3 0 11-4.243-4.242l.45-.45 4.243 4.242z"
          fill="currentColor"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_222_797">
          <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

IconWalletDisConnect16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWalletDisConnect16;

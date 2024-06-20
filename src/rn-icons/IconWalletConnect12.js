import React from 'react';
import PropTypes from 'prop-types';
import { Svg, G, Mask, Path, Defs, ClipPath } from 'react-native-svg';

const IconWalletConnect12 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '12'}
      height={size || '12'}
      viewBox="0 0 12 12"
      {...otherProps}
    >
      <G clipPath="url(#clip0_1_20)">
        <Mask
          id="a"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="12"
          height="12"
        >
          <Path
            d="M11.25.75H.75v10.5h10.5V.75z"
            fill="#D9D9D9"
            stroke="#FEFEFE"
            strokeWidth="1.5"
          />
        </Mask>
        <G mask="url(#a)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.707 6.702l3.735.163.652-.651a2.25 2.25 0 00-3.182-3.182l-.354.353-1.06-1.06.353-.354a3.75 3.75 0 115.303 5.303L9.036 8.392l-4.394-.191.065-1.499zm2.796-1.33H3.57l-.665.665A2.25 2.25 0 106.088 9.22l.353-.353 1.06 1.06-.353.354a3.75 3.75 0 01-5.303-5.303l1.104-1.105h4.554v1.5z"
            fill="currentColor"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_1_20">
          <Path fill="#fff" d="M0 0h12v12H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

IconWalletConnect12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWalletConnect12;

import React from 'react';
import PropTypes from 'prop-types';
import { Svg, G, Mask, Path, Defs, ClipPath } from 'react-native-svg';

const IconWalletDisConnect12 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '12'}
      height={size || '12'}
      viewBox="0 0 12 12"
      {...otherProps}
    >
      <G clipPath="url(#clip0_1_28)">
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
            d="M4.928 1.785l-1.06 1.06 1.06 1.061 1.06-1.06a2.25 2.25 0 113.183 3.181L8.11 7.088l1.06 1.06 1.061-1.06a3.75 3.75 0 10-5.303-5.303zM2.083 4.629L.996 3.542l1.06-1.06 7.425 7.424-1.06 1.06-1.034-1.033-.338.337a3.75 3.75 0 11-5.303-5.303l.337-.338zm4.243 4.243l-.337.337a2.25 2.25 0 01-3.182-3.182l.337-.337 3.182 3.182z"
            fill="currentColor"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_1_28">
          <Path fill="#fff" d="M0 0h12v12H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

IconWalletDisConnect12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWalletDisConnect12;

import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Mask, Path, G } from 'react-native-svg';

const IconWalletInfo12 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '12'}
      height={size || '12'}
      viewBox="0 0 12 12"
      {...otherProps}
    >
      <Mask
        id="a"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="12"
        height="12"
      >
        <Path d="M11.5.5H.5v11h11V.5z" fill="#D9D9D9" stroke="#FEFEFE" />
      </Mask>
      <G mask="url(#a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 10a4 4 0 100-8 4 4 0 000 8zm0 1A5 5 0 106 1a5 5 0 000 10zm-.5-2.5v-1h1v1h-1zm0-5v3h1v-3h-1z"
          fill="currentColor"
        />
      </G>
    </Svg>
  );
};

IconWalletInfo12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWalletInfo12;

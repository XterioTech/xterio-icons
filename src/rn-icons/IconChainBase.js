import React from 'react';
import PropTypes from 'prop-types';
import { Svg, G, Path, Defs, ClipPath } from 'react-native-svg';

const IconChainBase = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <Svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <G clipPath="url(#clip0_0_363)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.94 17.94A8.4 8.4 0 013.686 13.2H16.8v-2.4H3.686a8.4 8.4 0 1114.254 7.14zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"
            fill="#0052FF"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_0_363">
            <Path fill="#fff" d="M0 0h24v24H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </Svg>
  );
};

IconChainBase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconChainBase;

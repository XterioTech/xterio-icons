import React from 'react';
import PropTypes from 'prop-types';
import { Svg, G, Path, Defs, ClipPath } from 'react-native-svg';

const IconMessageLogo = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <G clipPath="url(#clip0_0_381)">
        <Path
          d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"
          fill="#7DD5F9"
        />
        <Path
          d="M8.401 12.126a3.6 3.6 0 016.955-1.864l.621 2.319 1.625 1.428-9.273 2.484.694-2.049-.622-2.318z"
          fill="currentColor"
        />
        <Path
          d="M10.212 7.293l1.004-.89.466 1.738-1.16.31-.31-1.158zM10.803 16.452l2.898-.777-.27 1.315-2.897.776.269-1.314z"
          fill="currentColor"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_0_381">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

IconMessageLogo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconMessageLogo;

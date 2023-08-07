import React from 'react';
import PropTypes from 'prop-types';
import { Svg, G, Path, Defs, ClipPath } from 'react-native-svg';

const IconInfo16 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '16'}
      height={size || '16'}
      viewBox="0 0 16 16"
      {...otherProps}
    >
      <Svg
        width="16"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <G clipPath="url(#clip0_222_816)">
          <Path d="M8 16A8 8 0 108 0a8 8 0 000 16z" fill="#FEFEFE" />
          <Path d="M9 10H7v2h2v-2zM9 4H7v5h2V4z" fill="#E6B1F7" />
        </G>
        <Defs>
          <ClipPath id="clip0_222_816">
            <Path fill="#fff" d="M0 0h16v16H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </Svg>
  );
};

IconInfo16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconInfo16;

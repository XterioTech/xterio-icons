import React from 'react';
import PropTypes from 'prop-types';
import { Svg, G, Circle, Path, Defs, ClipPath } from 'react-native-svg';

const IconTokenArbitrumEth = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <G clipPath="url(#clip0_0_638)">
        <Circle cx="12" cy="12" r="12" fill="#ECEFF0" />
        <Path
          d="M11.696 4l4.911 8.173-4.91 2.916-4.912-2.916L11.696 4z"
          fill="#2F3030"
        />
        <Path d="M11.696 4l-4.911 8.173 4.911 2.916V4z" fill="#828384" />
        <Path
          d="M11.696 20l4.912-6.906-4.912 2.877-4.91-2.877L11.695 20z"
          fill="#2F3030"
        />
        <Path d="M11.696 20l-4.91-6.906 4.91 2.877V20z" fill="#828384" />
        <Path
          opacity="0.6"
          d="M11.696 9.909l4.912 2.263-4.912 2.917-4.91-2.917 4.91-2.263z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_0_638">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

IconTokenArbitrumEth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconTokenArbitrumEth;

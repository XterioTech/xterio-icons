import React from 'react';
import PropTypes from 'prop-types';
import { Svg, G, Path, Defs, ClipPath } from 'react-native-svg';

const IconPnWalletEntry = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <G clipPath="url(#clip0_1102_4182)">
        <Path
          d="M24 18l-6 6H0V0h24v18zM1 23h16.586L23 17.586V1H1v22zm14.778-11l-5.39 5.389-.706-.707L14.363 12 9.682 7.318l.707-.707L15.779 12z"
          fill="currentColor"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1102_4182">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

IconPnWalletEntry.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconPnWalletEntry;

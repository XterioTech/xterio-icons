import React from 'react';
import PropTypes from 'prop-types';
import { Svg, G, Path, Defs, ClipPath } from 'react-native-svg';

const IconLinkedWallet12 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '12'}
      height={size || '12'}
      viewBox="0 0 12 12"
      {...otherProps}
    >
      <G
        clipPath="url(#clip0_222_774)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      >
        <Path d="M9.81 8.25H3.75V6h1.5v.75h3.94l.56-.56V2.25H5.81l-.56.56V3h-.19l-.03.03L5 3H3.75v-.81L5.19.75h6.06v6.06L9.81 8.25z" />
        <Path d="M2.19 3.75h6.06V6h-1.5v-.75H2.81l-.56.56v3.94h3.94l.56-.56V9h.19l.03-.03L7 9h1.25v.81l-1.44 1.44H.75V5.19l1.44-1.44z" />
      </G>
      <Defs>
        <ClipPath id="clip0_222_774">
          <Path fill="#fff" d="M0 0h12v12H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

IconLinkedWallet12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconLinkedWallet12;

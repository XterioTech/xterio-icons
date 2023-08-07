import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconWalletConnected40 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '40'}
      height={size || '40'}
      viewBox="0 0 40 40"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.364 9.636H8.636v19.728h22.728V26H21V13h10.364V9.636zm0 6v7.728h-7.728v-7.728h7.728zM34 32V7H6v25h28zm-4.258-13.97h-3.69v2.636h3.163l.527-2.636z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconWalletConnected40.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWalletConnected40;

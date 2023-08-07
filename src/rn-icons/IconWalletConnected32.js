import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconWalletConnected32 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '32'}
      height={size || '32'}
      viewBox="0 0 32 32"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.134 9.067H7.867v14.266h16.267V20.8H17.2v-9.2h6.934V9.067zm0 5.2v3.866h-4.267v-3.866h4.267zM26.8 26V6.4H5.2V26h21.6zm-3.6-10.8h-2.8v2h2.4l.4-2z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconWalletConnected32.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWalletConnected32;

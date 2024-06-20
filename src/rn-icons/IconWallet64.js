import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconWallet64 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '64'}
      height={size || '64'}
      viewBox="0 0 64 64"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 16H14v32h36v-6H33V22h17v-6zm0 11v10H38V27h12zm5 26V11H9v42h46zm-8-23h-6v4h4l2-4z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconWallet64.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWallet64;

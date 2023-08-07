import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconWalletConnected80 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '80'}
      height={size || '80'}
      viewBox="0 0 80 80"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 16h54v49H13V16zm49 5v8H43v23h19v8H18V21h44zm0 13v13H48V34h14zm-4 4h-7v5h5l2-5z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconWalletConnected80.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWalletConnected80;

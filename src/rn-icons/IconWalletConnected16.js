import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconWalletConnected16 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '16'}
      height={size || '16'}
      viewBox="0 0 16 16"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 4H3v9h10v-1H7V5h6V4zm0 3v3H9V7h4zm2 8V2H1v13h14zm-2.333-7.5H10v2h2l.667-2z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconWalletConnected16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWalletConnected16;

import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconWallet = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <Path
        d="M20.005 7V5h-16v14h16v-2h-8a1 1 0 01-1-1V8a1 1 0 011-1h8zm-17-4h18a1 1 0 011 1v16a1 1 0 01-1 1h-18a1 1 0 01-1-1V4a1 1 0 011-1zm10 6v6h7V9h-7zm2 2h3v2h-3v-2z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconWallet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWallet;

import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconMarketNormal = props => {
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
        d="M21.294 8.803A3.367 3.367 0 0120 12.793V19h1v2H3v-2h1v-6.206a3.367 3.367 0 01-1.294-3.991L4.883 3h14.235l2.176 5.803zm-6.447 2.972a3.355 3.355 0 01-4.493 1.146 3.356 3.356 0 01-1.2-1.146l-.227-.363-.159.27a3.37 3.37 0 01-1.256 1.238A3.364 3.364 0 016 13.348V19h12v-5.652a3.363 3.363 0 01-2.769-1.666l-.158-.27-.226.363zM4.579 9.505a1.367 1.367 0 002.462 1.17l1.826-3.131 1.982 3.172a1.356 1.356 0 002.301 0l1.983-3.172 1.826 3.13a1.368 1.368 0 002.462-1.17L17.73 5H6.268L4.58 9.505z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconMarketNormal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconMarketNormal;

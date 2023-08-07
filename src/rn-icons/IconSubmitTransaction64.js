import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconSubmitTransaction64 = props => {
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
        d="M8.5 9.5h45v16.733h-5V14.5h-35v32.794l4.63-3.127h12.212v5H19.66L8.5 56.706V9.5zM45 34a1 1 0 100 2 1 1 0 000-2zm-6 1a6 6 0 1112 0 6 6 0 01-12 0zm-.324 17.113l.698-2.327c.012-.027.037-.08.079-.151.1-.172.295-.45.637-.748.642-.559 2.038-1.387 4.91-1.387 2.871 0 4.267.828 4.91 1.386.342.298.536.577.637.749.041.071.066.124.078.151l.699 2.327 4.789-1.437c-.083-.276-.16-.555-.237-.834-.258-.94-.517-1.881-1.01-2.727a8.029 8.029 0 00-1.676-2.002C51.532 43.672 48.928 42.5 45 42.5c-3.929 0-6.532 1.172-8.19 2.614a8.026 8.026 0 00-1.676 2.001c-.169.289-.29.543-.373.742-.268.635-.452 1.305-.635 1.972-.078.284-.155.567-.24.847l4.79 1.437zM20.5 22.5h21v5h-21v-5zm9 10h-9v5h9v-5z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconSubmitTransaction64.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSubmitTransaction64;

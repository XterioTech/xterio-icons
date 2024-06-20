import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconUnname24 = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.418 5.536c1.704-.34 3.46-.34 5.164 0l.79.158 1.5 5.247a1 1 0 00.59.654l1.295.518-.936.234c-3.822.956-7.82.956-11.642 0l-.936-.234 1.295-.518a1 1 0 00.59-.654l1.5-5.247.79-.158zm5.556-1.961a15.167 15.167 0 00-5.948 0l-1.389.278a1 1 0 00-.765.706L5.34 9.92l-3.711 1.485a1 1 0 00.128 1.898l3.67.918 1.445 5.054a1 1 0 001.384.631l1.7-.793a4.833 4.833 0 014.088 0l1.7.793a1 1 0 001.384-.631l1.444-5.054 3.67-.918a1 1 0 00.13-1.898L18.66 9.92 17.128 4.56a1 1 0 00-.765-.706l-1.389-.278zm1.382 11.121c-.453.077-.907.142-1.362.195a1 1 0 11-1.993.154c-.667.025-1.335.025-2.002 0a1 1 0 11-1.993-.154c-.455-.053-.91-.118-1.362-.195l.829 2.902.637-.297a6.833 6.833 0 015.78 0l.637.297.83-2.902z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconUnname24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconUnname24;

import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconMarketNormal24 = props => {
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
        d="M16.488 12.92c.457.257.974.408 1.512.43V19H6v-5.65a3.366 3.366 0 002.769-1.668l.157-.27.228.363a3.355 3.355 0 005.692 0l.227-.363.158.27a3.368 3.368 0 001.257 1.238zM4 19v-6.204a3.368 3.368 0 01-1.294-3.993L4.882 3h14.236l2.176 5.803A3.368 3.368 0 0120 12.796V19h1v2H3v-2h1zm.579-9.495L6.269 5h11.463l1.689 4.505a1.368 1.368 0 01-2.462 1.17l-1.826-3.131-1.983 3.171a1.356 1.356 0 01-2.3 0L8.867 7.544l-1.826 3.13a1.368 1.368 0 01-2.462-1.17z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconMarketNormal24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconMarketNormal24;

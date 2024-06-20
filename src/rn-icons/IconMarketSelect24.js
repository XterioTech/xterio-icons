import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconMarketSelect24 = props => {
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
        d="M6 15.351a5.457 5.457 0 01-2-.325V19H3v2h18v-2h-1v-3.974a5.376 5.376 0 01-2 .325V19H6v-3.649z"
        fill="currentColor"
      />
      <Path
        d="M4.882 3h14.236l2.176 5.803c.825 2.201-.802 4.55-3.154 4.55a3.368 3.368 0 01-2.909-1.67l-.158-.271-.227.363a3.356 3.356 0 01-5.692 0l-.228-.363-.157.27a3.368 3.368 0 01-2.91 1.67c-2.35 0-3.978-2.348-3.153-4.55L4.882 3z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconMarketSelect24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconMarketSelect24;

import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconMac = props => {
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
        d="M21 4.2v16H3v-16h18zm-1.556 1.778H11.92c-.613 1.757-.92 4.128-.92 7.11h2.667c-.103.819-.134 1.67-.095 2.558 1.09-.187 2.403-.69 3.58-1.52l1.008 1.48c-1.46.974-2.936 1.582-4.423 1.816.046.33.1.662.163 1h5.544V5.978zm-11.95 8.15l-.987 1.478c1.917 1.278 3.864 1.927 5.826 1.927v-1.777c-1.593 0-3.201-.536-4.84-1.629zm9.284-6.372a.889.889 0 01.889.888v.89a.888.888 0 11-1.778 0v-.89a.89.89 0 01.889-.888zm-8.89 0A.892.892 0 007 8.644v.89a.889.889 0 001.778 0v-.89a.89.89 0 00-.89-.888z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconMac.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconMac;

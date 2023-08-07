import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconWhitepaperScalable = props => {
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
        d="M20 5h-4a4 4 0 00-4 4V8a3 3 0 00-3-3H4v13h4l1.222.204c1.134.189 2.14.839 2.778 1.796a4.161 4.161 0 012.778-1.796L16 18h4V5z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconWhitepaperScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWhitepaperScalable;

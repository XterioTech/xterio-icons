import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconFullscreen = props => {
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
        d="M8 3v2H4v4H2V3h6zM2 21v-6h2v4h4v2H2zm20 0h-6v-2h4v-4h2v6zm0-12h-2V5h-4V3h6v6z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconFullscreen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconFullscreen;

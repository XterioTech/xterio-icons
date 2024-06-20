import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconFullscreen16 = props => {
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
        d="M15 1h-5v2h3v3h2V1zm0 9h-2v3h-3v2h5v-5zm-9 5v-2H3v-3H1v5h5zM3 3v3H1V1h5v2H3z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconFullscreen16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconFullscreen16;

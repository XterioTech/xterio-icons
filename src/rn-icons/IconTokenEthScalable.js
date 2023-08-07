import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconTokenEthScalable = props => {
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
        d="M11.696 1.5l6.446 10.727-6.446 3.827-6.446-3.827L11.696 1.5z"
        fill="currentColor"
        fillOpacity=".3"
      />
      <Path
        d="M11.696 1.5L5.25 12.227l6.446 3.827V1.5z"
        fill="currentColor"
        fillOpacity=".3"
      />
      <Path
        d="M11.696 22.5l6.446-9.065-6.446 3.777-6.446-3.777 6.446 9.065z"
        fill="currentColor"
        fillOpacity=".3"
      />
      <Path
        d="M11.696 22.5L5.25 13.435l6.446 3.777V22.5zM11.696 9.255l6.446 2.972-6.446 3.827-6.446-3.827 6.446-2.972z"
        fill="currentColor"
        fillOpacity=".3"
      />
    </Svg>
  );
};

IconTokenEthScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconTokenEthScalable;

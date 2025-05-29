import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconPolygon = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '21.33333396911621'}
      height={size || '24'}
      viewBox="0 0 21.33333396911621 24"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.667.92l9.595 5.54v11.08l-9.595 5.54-9.595-5.54V6.46L10.667.92zM17.595 8l-6.928-4-6.928 4v8l6.928 4 6.928-4V8z"
        fill="#141430"
      />
      <Path
        d="M10.667 4l6.928 4v8l-6.928 4-6.928-4V8l6.928-4z"
        fill="#7DD5F9"
      />
    </Svg>
  );
};

IconPolygon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconPolygon;

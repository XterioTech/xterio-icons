import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconChecked16 = props => {
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
        d="M14.207 5.707l-6.5 6.5a1 1 0 01-1.414 0l-4-4 1.414-1.414L7 10.086l5.793-5.793 1.414 1.414z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconChecked16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconChecked16;

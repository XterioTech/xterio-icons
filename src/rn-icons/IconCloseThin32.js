import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconCloseThin32 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '32'}
      height={size || '32'}
      viewBox="0 0 32 32"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 14.586l-8-8L6.586 8l8 8-8 8L8 25.414l8-8 8 8L25.414 24l-8-8 8-8L24 6.586l-8 8z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconCloseThin32.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconCloseThin32;

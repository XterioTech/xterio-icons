import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconArrow32 = props => {
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
        d="M15.293 20.707l-8-8 1.414-1.414L16 18.586l7.293-7.293 1.414 1.414-8 8a1 1 0 01-1.414 0z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconArrow32.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconArrow32;

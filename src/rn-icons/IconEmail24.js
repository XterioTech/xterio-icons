import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconEmail24 = props => {
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
        d="M3.334 6h17.333v12H3.334V6zm-2 14V4h21.333v16H1.334zM6.83 8.164L5.97 9.97 12 12.84l6.03-2.87-.86-1.806L12 10.626 6.83 8.164z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconEmail24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconEmail24;

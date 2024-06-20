import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconEmail16 = props => {
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
        d="M3 5h10v7H3V5zm-2 9V3h14v11H1zm3.447-7.895l-.894 1.79L8 10.117l4.447-2.224-.894-1.789L8 7.882 4.447 6.105z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconEmail16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconEmail16;

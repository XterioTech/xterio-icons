import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconEdit12 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '12'}
      height={size || '12'}
      viewBox="0 0 12 12"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.464 3.732l-1.732-1-3.086 5.345.366 1.366 1.366-.366 3.086-5.345zm-1.768 7.062l-4.098 1.098L1.5 7.794 6 0l5.196 3-4.5 7.794z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconEdit12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconEdit12;

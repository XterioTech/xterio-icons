import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconCheck = props => {
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
        d="M18.549 8.949L10.8 16.697l-5.049-5.048L7.45 9.95l3.351 3.352 6.052-6.052 1.697 1.698z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconCheck;

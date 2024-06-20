import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Circle } from 'react-native-svg';

const IconMore24 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <Circle cx="6.5" cy="11.5" r="1.5" fill="#FEFEFE" />
      <Circle cx="12.5" cy="11.5" r="1.5" fill="#FEFEFE" />
      <Circle cx="18.5" cy="11.5" r="1.5" fill="#FEFEFE" />
    </Svg>
  );
};

IconMore24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconMore24;

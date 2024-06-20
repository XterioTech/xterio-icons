import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path, Circle } from 'react-native-svg';

const IconGallery16 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '16'}
      height={size || '16'}
      viewBox="0 0 16 16"
      {...otherProps}
    >
      <Path stroke="#FEFEFE" strokeWidth="2" d="M2 3h12v10H2z" />
      <Path
        d="M4 11l4.414-1.892a5 5 0 014.876.527l1.21.865"
        stroke="#FEFEFE"
        strokeWidth="2"
      />
      <Circle cx="5" cy="6" r="1" fill="#FEFEFE" />
    </Svg>
  );
};

IconGallery16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconGallery16;

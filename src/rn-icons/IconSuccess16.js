import React from 'react';
import PropTypes from 'prop-types';
import { Svg, G, Path, Defs, ClipPath } from 'react-native-svg';

const IconSuccess16 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '16'}
      height={size || '16'}
      viewBox="0 0 16 16"
      {...otherProps}
    >
      <Svg
        width="16"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <G clipPath="url(#clip0_222_817)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-8.293 3.707l5-5-1.414-1.414L7 9.586 4.707 7.293 3.293 8.707l3 3a1 1 0 001.414 0z"
            fill="#6CDF8C"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_222_817">
            <Path fill="#fff" d="M0 0h16v16H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </Svg>
  );
};

IconSuccess16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSuccess16;

import React from 'react';
import PropTypes from 'prop-types';
import { Svg, G, Path, Defs, ClipPath } from 'react-native-svg';

const IconFailed16 = props => {
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
        <G clipPath="url(#clip0_222_815)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-4.293-2.293L9.414 8l2.293 2.293-1.414 1.414L8 9.414l-2.293 2.293-1.414-1.414L6.586 8 4.293 5.707l1.414-1.414L8 6.586l2.293-2.293 1.414 1.414z"
            fill="#E6B1F7"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_222_815">
            <Path fill="#fff" d="M0 0h16v16H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </Svg>
  );
};

IconFailed16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconFailed16;

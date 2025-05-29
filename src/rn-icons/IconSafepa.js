import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconSafepa = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <Svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.468 4.031a1.928 1.928 0 011.363-.564h9.435L16.22 7.51H8.398a.888.888 0 00-.888.89v6.59L3.79 11.268a1.099 1.099 0 010-1.558l5.679-5.68zm5.863 12.191h-7.82l-4.045 4.044h9.435c.511 0 1.002-.203 1.363-.564l5.68-5.68a1.098 1.098 0 000-1.557L16.22 8.743v6.589a.89.89 0 01-.89.89z"
          fill="#4A21EF"
        />
      </Svg>
    </Svg>
  );
};

IconSafepa.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSafepa;

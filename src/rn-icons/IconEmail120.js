import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconEmail120 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '120'}
      height={size || '120'}
      viewBox="0 0 120 120"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 37h66v21.82l3.5-1.26 3.5 1.26V30H15v60h57.587a19.992 19.992 0 01-1.997-7H22V37zm62.5 37.958v6.146a6 6 0 002.437 4.828L91.5 89.3l4.563-3.368a6 6 0 002.437-4.828v-6.146l-7-2.519-7 2.519zM91.5 98l8.72-6.436a13.001 13.001 0 005.28-10.46V70.037L91.5 65l-14 5.037v11.067a13 13 0 005.28 10.46L91.5 98zM35.506 45.84l-3.01 6.32 22.505 10.717L77.506 52.16l-3.01-6.32-19.495 9.283-19.495-9.283z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconEmail120.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconEmail120;

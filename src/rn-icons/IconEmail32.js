import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconEmail32 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '32'}
      height={size || '32'}
      viewBox="0 0 32 32"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 9h20v14H6V9zM3 26V6h26v20H3zm6.744-14.302l-1.488 2.604L16 18.729l7.744-4.426-1.488-2.604L16 15.273l-6.256-3.575z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconEmail32.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconEmail32;

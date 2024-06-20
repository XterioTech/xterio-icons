import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconEvent16 = props => {
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
        d="M6.667 13h-1V9h2v1.333h6V3h-3.334V1.667H5.667v-.334h-2V13h-1v2h4v-2zm-1-9.333h2.666V5h3.334v3.333h-2V7h-4V3.667z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconEvent16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconEvent16;

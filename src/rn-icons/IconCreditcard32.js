import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconCreditcard32 = props => {
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
        d="M26 9H6v3h20V9zM6 23v-8h20v4l3 1V6H3v20h12l-2-3H6zm8-6H8v3h4l2-3zm9.333 0L18 25h3.333l-.666 5L26 22h-3.333l.666-5z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconCreditcard32.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconCreditcard32;

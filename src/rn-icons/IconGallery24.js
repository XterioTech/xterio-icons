import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconGallery24 = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 6H4v12h16v-1.754a5.708 5.708 0 00-7.553-2.352l-6 3-.894-1.788 6-3A7.71 7.71 0 0120 13.13V6zM2 4v16h20V4H2zm5.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconGallery24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconGallery24;

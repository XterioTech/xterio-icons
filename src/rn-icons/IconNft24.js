import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconNft24 = props => {
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
        d="M12 4.288l7 3.889v7.646l-7 3.89-7-3.89V8.177l7-3.89zM21 7v10l-9 5-9-5V7l9-5 9 5zm-9 0L7 9.5l5 2.5 5-2.5L12 7z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconNft24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconNft24;

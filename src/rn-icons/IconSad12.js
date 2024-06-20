import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconSad12 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '12'}
      height={size || '12'}
      viewBox="0 0 12 12"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.204 9.575A4.006 4.006 0 012 6a3.985 3.985 0 011.354-3C4.06 2.378 4.986 2 6 2a3.985 3.985 0 013 1.354c.622.705 1 1.632 1 2.646a3.991 3.991 0 01-2.204 3.575C7.256 9.847 6.646 10 6 10a3.983 3.983 0 01-1.796-.425zm4.02-2.022h-.002a4.97 4.97 0 00-4.446 0l.448.894.024-.012a3.972 3.972 0 013.528.012l.448-.894zM11 6A5 5 0 111 6a5 5 0 0110 0zM5 4H4v2h1V4zm2 0h1v2H7V4z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconSad12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSad12;

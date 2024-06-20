import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconProfileNormal24 = props => {
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
        d="M20 12a8 8 0 11-16 0 8 8 0 0116 0zm2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-10 5a5 5 0 005-5h-2a3 3 0 01-3 3v2zM8 8h2v3H8V8zm6 0h-2v3h2V8z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconProfileNormal24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconProfileNormal24;

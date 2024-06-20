import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconProfileSelect24 = props => {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM10 8H8v3h2V8zm2 10a6 6 0 006-6h-2a4 4 0 01-4 4v2zm3.316-8.051l-3 1-.632-1.898 3-1 .632 1.898z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconProfileSelect24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconProfileSelect24;

import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconEmail80 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '80'}
      height={size || '80'}
      viewBox="0 0 80 80"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59 25H15v30h32.673c.286 1.78.921 3.48 1.858 5H10V20h54v17.596l-2.5-.933-2.5.933V25zm2.5 22.337l4 1.492v4.002a3.667 3.667 0 01-1.438 2.911L61.5 57.703l-2.562-1.96A3.667 3.667 0 0157.5 52.83v-4.002l4-1.492zm5.601 12.376L61.5 64l-5.601-4.287A8.667 8.667 0 0152.5 52.83v-7.473l9-3.358 9 3.358v7.473a8.667 8.667 0 01-3.399 6.882z"
        fill="currentColor"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.926 34.924l2.15-4.514L37 36.564l12.925-6.154 2.15 4.514L37 42.102l-15.075-7.178z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconEmail80.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconEmail80;

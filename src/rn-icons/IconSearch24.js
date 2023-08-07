import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconSearch24 = props => {
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
        d="M17 11a6 6 0 11-12 0 6 6 0 0112 0zm-1.094 6.32a8 8 0 111.414-1.414l3.594 3.594-1.414 1.414-3.594-3.594z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconSearch24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSearch24;

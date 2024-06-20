import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const Icon2FApassword24 = props => {
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
        d="M16 13a5 5 0 100-10 5 5 0 000 10zm0 2a7 7 0 10-5.606-2.808L2.586 20l3.707 3.707 1.414-1.414L5.414 20 7 18.414l2.293 2.293 1.414-1.414L8.414 17l3.394-3.393A6.969 6.969 0 0016 15z"
        fill="currentColor"
      />
    </Svg>
  );
};

Icon2FApassword24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Icon2FApassword24;

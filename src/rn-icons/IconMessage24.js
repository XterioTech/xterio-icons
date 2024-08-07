import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconMessage24 = props => {
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
        d="M13 2l-2 1v2.044a7.001 7.001 0 00-6 6.929V16l-1.395 3h16.79L19 16v-4.027a7.002 7.002 0 00-6-6.93V2zm-1.717 5.024L12 6.92l.717.102A5.002 5.002 0 0117 11.973v4.47l.26.557H6.74l.26-.558v-4.47a5.001 5.001 0 014.283-4.948zm5.155 13.226H8.015L6.812 22h8.422l1.204-1.75z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconMessage24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconMessage24;

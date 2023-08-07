import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconXsoulInfo24 = props => {
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
        d="M14 4a2 2 0 11-4 0 2 2 0 014 0zM9 9h3a1 1 0 011 1v11h2v2H9v-2h2V11H9V9z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconXsoulInfo24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconXsoulInfo24;

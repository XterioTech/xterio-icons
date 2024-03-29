import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconConnect24 = props => {
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
        d="M20 5H4v7H1V2h22v20H11v-3h9v-1.5h-9.5v-11H20V5zm-6.5 4.5H20v5h-6.5v-5zM1 14a8 8 0 018 8H6a5 5 0 00-5-5v-3zm0 5a3 3 0 013 3H1v-3zm18-8.5h-4v3h3l1-3z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconConnect24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconConnect24;

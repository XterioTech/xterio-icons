import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconEvent24 = props => {
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
        d="M6 20V2h2v1h7v2h5v10h-8v-2H8v7h2v2H4v-2h2zm2-9h6v2h4V7h-5V5H8v6z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconEvent24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconEvent24;

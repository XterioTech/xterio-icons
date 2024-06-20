import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconPoints12 = props => {
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
        d="M2.074 4.533L4.08 2.271l5.454 1.461.605 2.962-5.113 2.952-2.952-5.113zM3.573.583l7.244 1.94 1.009 4.93-7.349 4.242L.235 4.347 3.573.582zM4.582 5.51l2.897.777.388-1.449-2.897-.777-.388 1.45z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconPoints12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconPoints12;

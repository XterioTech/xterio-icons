import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconGameSelect24 = props => {
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
        d="M4.586 4h14.828l2.555 2.554L23.079 21h-6.614l-2-3h-4.93l-2 3H.92L2.031 6.554 4.586 4zM17 12a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 100-6 3 3 0 000 6zM9 8v2h2v2H9v2H7v-2H5v-2h2V8h2z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconGameSelect24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconGameSelect24;

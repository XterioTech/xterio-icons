import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconGame24 = props => {
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
        d="M15 18H9l-2 3H1L2 6l2-2h16l2 2 1 15h-6l-2-3zm-7.07-2l-2 3H3.138l.808-12.117L4.828 6h14.344l.882.883L20.862 19H18.07l-2-3H7.93zM17 11a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-9.5-1H11v2H9.5v1.5h-2V12H6v-2h1.5V8.5h2V10z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconGame24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconGame24;

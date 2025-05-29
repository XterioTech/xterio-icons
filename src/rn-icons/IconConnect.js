import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconConnect = props => {
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
        d="M19.333 5.65H4.667v7H3V3.983h18v16.334H10.667V18.65h8.666v-2.667H13V8.317h6.333V5.65zm0 4.333v4.334h-4.666V9.983h4.666zm-1 1.334H16v1.666h2l.333-1.666zM3 15.983v-1.666a6 6 0 016 6H7.333A4.333 4.333 0 003 15.983zm0 2.667c.92 0 1.667.746 1.667 1.667H3V18.65z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconConnect.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconConnect;

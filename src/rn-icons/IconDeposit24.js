import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconDeposit24 = props => {
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
        d="M19 21H5v-2h14v2zm-7.707-6.293a1 1 0 001.414 0l6-6-1.414-1.414L13 11.586V3h-2v8.586L6.707 7.293 5.293 8.707l6 6z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconDeposit24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconDeposit24;

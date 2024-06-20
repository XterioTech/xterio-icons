import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconSubscribed24 = props => {
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
        d="M20 2H4v20.723l8-4.571 8 4.571V2zm-9 12.414l5.707-5.707-1.414-1.414L11 11.586 8.707 9.293l-1.414 1.414L11 14.414z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconSubscribed24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSubscribed24;

import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconSubscribed = props => {
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
        d="M20 22.724l-8-4.573-8 4.573V2h16v20.724zm-9-11.138L8.707 9.293l-1.414 1.414L11 14.414l5.707-5.707-1.414-1.414L11 11.586z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconSubscribed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSubscribed;

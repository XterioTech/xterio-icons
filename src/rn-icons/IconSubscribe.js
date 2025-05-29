import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconSubscribe = props => {
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
        d="M14.5 4H6v15.276l6-3.427 6 3.427V11h2v11.724l-8-4.573-8 4.573V2h10.5v2zM20 4h2v2h-2v2h-2V6h-2V4h2V2h2v2z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconSubscribe.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSubscribe;

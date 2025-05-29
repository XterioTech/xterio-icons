import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconXsoulShare = props => {
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
        d="M13.12 17.023l-4.199-2.29a4 4 0 110-5.465l4.2-2.29a4 4 0 11.958 1.755l-4.2 2.29a4.008 4.008 0 010 1.954l4.2 2.29a4 4 0 11-.959 1.755zM6 14a2 2 0 100-4 2 2 0 000 4zm11-6a2 2 0 100-4 2 2 0 000 4zm0 12a2 2 0 100-4 2 2 0 000 4z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconXsoulShare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconXsoulShare;

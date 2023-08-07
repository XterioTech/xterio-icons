import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconWalletSwitch32 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '32'}
      height={size || '32'}
      viewBox="0 0 32 32"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.307 7.707L10.414 11.6H24v2H8a1 1 0 01-.707-1.707l5.6-5.6 1.414 1.414zm3.386 16.586l3.893-3.893H8v-2h16a1 1 0 01.707 1.707l-5.6 5.6-1.414-1.414z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconWalletSwitch32.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWalletSwitch32;

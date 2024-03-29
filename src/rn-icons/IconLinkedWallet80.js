import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconLinkedWallet80 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '80'}
      height={size || '80'}
      viewBox="0 0 80 80"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.5 49.5h25.536l9.464-9.465V14.5H35.965L30.5 19.965V26h5v-3.965l2.536-2.535H60.5v18.465L53.965 44.5H35.5V40h-5v9.5zm19-19H23.963L14.5 39.965V65.5h29.535l5.465-5.465V54h-5v3.965L41.963 60.5H19.5V42.035l6.535-6.535H44.5V40h5v-9.5z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconLinkedWallet80.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconLinkedWallet80;

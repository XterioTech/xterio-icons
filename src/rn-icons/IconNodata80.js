import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconNodata80 = props => {
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
        d="M68 24L40 8 12 24v32l28 16 28-16V24zM16 53.679V26.32l24-13.714 24 13.714V53.68L40 67.393 16 53.679zM40 19l-16 9.044 16 9.043 16-9.044L40 19z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconNodata80.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconNodata80;

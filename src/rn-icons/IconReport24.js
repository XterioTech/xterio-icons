import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconReport24 = props => {
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
        d="M12 2.6a1 1 0 01.866.5l9 15.6A1 1 0 0121 20.2H3a1 1 0 01-.866-1.5l9-15.6A1 1 0 0112 2.6zm7.269 15.6L12 5.601l-7.269 12.6H19.27zM13 15v2h-2v-2h2zm0-1V9h-2v5h2z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconReport24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconReport24;

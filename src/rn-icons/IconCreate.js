import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconCreate = props => {
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
        d="M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 01-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 013.667-3.667h1.966A3.558 3.558 0 0020 10.89C20 7.139 16.468 4 12 4a8 8 0 00-.676 15.972 3.648 3.648 0 01-.513-1.86zM7.5 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM12 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconCreate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconCreate;

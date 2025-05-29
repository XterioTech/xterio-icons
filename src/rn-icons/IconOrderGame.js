import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconOrderGame = props => {
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
        d="M7.5 2.25h1.875v1.125h5.25V2.25H16.5v1.125H21v3.75h-1.875V5.25H16.5v1.125h-1.875V5.25h-5.25v1.125H7.5V5.25H4.875v13.5H7.5v1.875H3V3.375h4.5V2.25zm8.25 18a4.875 4.875 0 100-9.75 4.875 4.875 0 000 9.75zm0 1.875a6.75 6.75 0 100-13.5 6.75 6.75 0 000 13.5zm.288-4.962l2.913-2.913-1.326-1.326-2.25 2.25-1.125-1.125-1.326 1.326 1.788 1.788a.937.937 0 001.326 0z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconOrderGame.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconOrderGame;

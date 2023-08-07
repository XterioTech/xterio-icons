import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconWebScalable = props => {
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
        d="M9.83 10.905a2.98 2.98 0 015.942 0H9.83zm9.092-3.073a7.522 7.522 0 00-3.09-2.547c1.392-.544 2.436-.552 2.971 0 .535.551.518 1.35.12 2.547zM5.831 14.903a7.53 7.53 0 002.903 3.524 5.944 5.944 0 01-1.893.51 1.698 1.698 0 01-1.333-.383c-.62-.62-.5-1.944.323-3.65zm13.473-6.486a6.113 6.113 0 00.433-2.351 2.64 2.64 0 00-.713-1.8c-.849-.85-3.158-.722-5.68.39h-.543a7.497 7.497 0 00-7.276 5.646l-.136.552.349-.45a10.425 10.425 0 012.98-2.7l-.493.493a17.35 17.35 0 00-2.513 3.15 15.222 15.222 0 00-1.494 3.2 8.55 8.55 0 00-.476 2.683 2.496 2.496 0 00.56 1.757 2.681 2.681 0 001.987.722 7.504 7.504 0 003.176-.85 7.378 7.378 0 003.345.782 7.488 7.488 0 007.088-5.094l.051-.162h-4.245v.06a3.125 3.125 0 01-5.492 0 3.15 3.15 0 01-.4-1.4h10.41v-.111a7.84 7.84 0 00.041-.85c0-1.284-.33-2.547-.959-3.667z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconWebScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWebScalable;

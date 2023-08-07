import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconCoinbaseScalable = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <Svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M12 1.8c5.634 0 10.2 4.566 10.2 10.2 0 5.634-4.566 10.2-10.2 10.2-5.634 0-10.2-4.566-10.2-10.2C1.8 6.366 6.366 1.8 12 1.8z"
          fill="#0052FF"
        />
        <Path
          d="M12.015 15.586A3.588 3.588 0 018.423 12a3.588 3.588 0 013.592-3.586 3.59 3.59 0 013.538 2.988h3.619a7.18 7.18 0 00-7.159-6.574C8.045 4.828 4.828 8.04 4.828 12c0 3.96 3.217 7.172 7.185 7.172a7.18 7.18 0 007.159-6.574h-3.62a3.59 3.59 0 01-3.537 2.988z"
          fill="#fff"
        />
      </Svg>
    </Svg>
  );
};

IconCoinbaseScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconCoinbaseScalable;

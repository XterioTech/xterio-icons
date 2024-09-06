import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconCreate24 = props => {
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
        d="M20.426 2.378L18.457 1l-6.31 9.01-.162 2.328 2.131-.949 3.69-5.27C19.27 7.441 20 9.085 20 11.05c0 1.35-.392 2.346-1.175 2.987C18.042 14.68 17.1 15 16 15h-1.75c-.7 0-1.292.208-1.775.625-.483.417-.725.975-.725 1.675 0 .633.125 1.108.375 1.425.25.317.375.592.375.825a.419.419 0 01-.137.325A.518.518 0 0112 20c-2.217 0-4.104-.78-5.662-2.337C4.779 16.104 4 14.217 4 12c0-2.233.8-4.125 2.4-5.675C8 4.775 9.933 4 12.2 4c.25 0 .495.01.736.028l1.289-1.841A10.801 10.801 0 0012.2 2c-1.4 0-2.717.263-3.95.788a10.48 10.48 0 00-3.237 2.137 10.13 10.13 0 00-2.2 3.175A9.48 9.48 0 002 12c0 1.367.263 2.658.788 3.875a10.142 10.142 0 002.15 3.188c.908.908 1.97 1.625 3.187 2.15A9.676 9.676 0 0012 22c.75 0 1.354-.2 1.813-.6.458-.4.687-1.017.687-1.85 0-.483-.125-.913-.375-1.288s-.375-.662-.375-.862c0-.1.03-.192.088-.275.058-.083.162-.125.312-.125H16c1.667 0 3.083-.512 4.25-1.537C21.417 14.438 22 12.966 22 11.05c0-1.283-.262-2.48-.788-3.588a9.092 9.092 0 00-2.253-2.989l1.467-2.095zM9.575 14.575c-.283.283-.642.425-1.075.425-.433 0-.792-.142-1.075-.425C7.142 14.292 7 13.933 7 13.5c0-.433.142-.792.425-1.075.283-.283.642-.425 1.075-.425.433 0 .792.142 1.075.425.283.283.425.642.425 1.075 0 .433-.142.792-.425 1.075z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconCreate24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconCreate24;
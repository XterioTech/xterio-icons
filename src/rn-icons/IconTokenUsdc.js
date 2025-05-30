import React from 'react';
import PropTypes from 'prop-types';
import { Svg, G, Path, Defs, ClipPath } from 'react-native-svg';

const IconTokenUsdc = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <G clipPath="url(#clip0_60_38)">
        <Path
          d="M12 24c6.65 0 12-5.35 12-12S18.65 0 12 0 0 5.35 0 12s5.35 12 12 12z"
          fill="#2775CA"
        />
        <Path
          d="M15.3 13.9c0-1.75-1.05-2.35-3.15-2.6-1.5-.2-1.8-.6-1.8-1.3 0-.7.5-1.15 1.5-1.15.9 0 1.4.3 1.65 1.05.05.15.2.25.35.25h.8c.2 0 .35-.15.35-.35v-.05c-.2-1.1-1.1-1.95-2.25-2.05V6.5c0-.2-.15-.35-.4-.4h-.75c-.2 0-.35.15-.4.4v1.15c-1.5.2-2.45 1.2-2.45 2.45 0 1.65 1 2.3 3.1 2.55 1.4.25 1.85.55 1.85 1.35s-.7 1.35-1.65 1.35c-1.3 0-1.75-.55-1.9-1.3-.05-.2-.2-.3-.35-.3h-.85c-.2 0-.35.15-.35.35v.05c.2 1.25 1 2.15 2.65 2.4v1.2c0 .2.15.35.4.4h.75c.2 0 .35-.15.4-.4v-1.2c1.5-.25 2.5-1.3 2.5-2.65z"
          fill="#fff"
        />
        <Path
          d="M9.45 19.15c-3.9-1.4-5.9-5.75-4.45-9.6.75-2.1 2.4-3.7 4.45-4.45.2-.1.3-.25.3-.5v-.7c0-.2-.1-.35-.3-.4-.05 0-.15 0-.2.05C4.5 5.05 1.9 10.1 3.4 14.85c.9 2.8 3.05 4.95 5.85 5.85.2.1.4 0 .45-.2.05-.05.05-.1.05-.2v-.7c0-.15-.15-.35-.3-.45zm5.3-15.6c-.2-.1-.4 0-.45.2-.05.05-.05.1-.05.2v.7c0 .2.15.4.3.5 3.9 1.4 5.9 5.75 4.45 9.6-.75 2.1-2.4 3.7-4.45 4.45-.2.1-.3.25-.3.5v.7c0 .2.1.35.3.4.05 0 .15 0 .2-.05 4.75-1.5 7.35-6.55 5.85-11.3-.9-2.85-3.1-5-5.85-5.9z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_60_38">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

IconTokenUsdc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconTokenUsdc;

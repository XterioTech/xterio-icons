import React from 'react';
import PropTypes from 'prop-types';
import { Svg, G, Path, Defs, ClipPath } from 'react-native-svg';

const IconOpenSeaScalable = props => {
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
        <G clipPath="url(#clip0_1_663)">
          <Path
            d="M12.096.12C5.472.072.072 5.472.12 12.096c.048 6.456 5.328 11.712 11.784 11.784 6.648.048 12.048-5.352 11.976-11.976C23.832 5.448 18.552.168 12.096.12z"
            fill="#2081E2"
          />
          <Path
            d="M8.544 6.216A5.43 5.43 0 019.72 9.624a5.572 5.572 0 01-.888 3H4.848l3.696-6.408z"
            fill="#fff"
          />
          <Path
            d="M20.712 14.04a.132.132 0 01-.072.12c-.264.12-1.152.528-1.536 1.056-.96 1.32-1.68 3.432-3.312 3.432h-6.84c-2.424 0-4.44-1.92-4.416-4.464 0-.072.048-.12.12-.12h3.216a.19.19 0 01.192.192v.624c0 .336.264.6.6.6h2.448v-1.416h-1.68a7.161 7.161 0 001.536-4.44 7.12 7.12 0 00-1.896-4.848c.72.072 1.392.216 2.016.408v-.408c0-.408.336-.744.744-.744s.744.336.744.744v.96c2.28 1.056 3.792 2.832 3.792 4.848 0 1.176-.504 2.28-1.392 3.192a.927.927 0 01-.648.264H12.6v1.416h2.16c.456 0 1.296-.888 1.704-1.416 0 0 .024-.024.072-.048.048-.024 3.984-.912 3.984-.912.072-.024.168.048.168.12l.024.84z"
            fill="#fff"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_1_663">
            <Path fill="#fff" d="M0 0h24v24H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </Svg>
  );
};

IconOpenSeaScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconOpenSeaScalable;

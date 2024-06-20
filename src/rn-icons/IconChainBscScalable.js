import React from 'react';
import PropTypes from 'prop-types';
import { Svg, G, Path, Defs, ClipPath } from 'react-native-svg';

const IconChainBscScalable = props => {
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
        <G clipPath="url(#clip0_1_354)">
          <Path
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            fill="#0B0E11"
          />
          <Path
            d="M7.725 6.477l4.227-2.46 4.227 2.46-1.554.909-2.673-1.551-2.673 1.551-1.554-.909zm8.454 3.104l-1.554-.911-2.673 1.553L9.279 8.67l-1.554.91v1.818l2.673 1.55v3.104l1.554.909 1.554-.909v-3.104l2.673-1.549V9.58zm0 4.92v-1.819l-1.554.91v1.817l1.554-.909zm1.104.643l-2.673 1.551v1.818l4.227-2.46v-4.92l-1.554.908v3.103zm-1.554-7.116l1.554.909v1.818l1.554-.909V8.028l-1.554-.909-1.554.909zm-5.331 9.327v1.818l1.554.909 1.554-.909v-1.818l-1.554.909-1.554-.909zm-2.673-2.854l1.554.909V13.59l-1.554-.909v1.819zm2.673-6.473l1.554.909 1.554-.909-1.554-.909-1.554.909zm-3.776.909l1.555-.909-1.554-.909-1.556.909v1.818l1.555.909V8.937zm0 3.105l-1.555-.912v4.92l4.227 2.462v-1.817l-2.672-1.551v-3.102z"
            fill="#F1B90C"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_1_354">
            <Path fill="#fff" d="M0 0h24v24H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </Svg>
  );
};

IconChainBscScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconChainBscScalable;

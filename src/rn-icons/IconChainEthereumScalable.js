import React from 'react';
import PropTypes from 'prop-types';
import { Svg, G, Path, Defs, ClipPath } from 'react-native-svg';

const IconChainEthereumScalable = props => {
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
        <G clipPath="url(#clip0_960_109)">
          <Path
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            fill="#6284F5"
          />
          <Path
            opacity=".6"
            d="M12.01 9.916L7.1 12.148l4.91 2.903 4.912-2.903-4.911-2.232z"
            fill="#fff"
          />
          <Path
            opacity=".45"
            d="M7.103 12.148l4.91 2.903V4l-4.91 8.148z"
            fill="#fff"
          />
          <Path
            opacity=".8"
            d="M12.013 4v11.051l4.91-2.903L12.013 4z"
            fill="#fff"
          />
          <Path
            opacity=".45"
            d="M7.1 13.08L12.012 20v-4.02l-4.91-2.9z"
            fill="#fff"
          />
          <Path
            opacity=".8"
            d="M12.012 15.98V20l4.914-6.92-4.914 2.9z"
            fill="#fff"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_960_109">
            <Path fill="#fff" d="M0 0h24v24H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </Svg>
  );
};

IconChainEthereumScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconChainEthereumScalable;

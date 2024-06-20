import React from 'react';
import PropTypes from 'prop-types';
import {
  Svg,
  Path,
  Mask,
  G,
  Circle,
  Defs,
  LinearGradient,
  Stop
} from 'react-native-svg';

const IconChainXterioEthScalable = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '24.000072479248047'}
      height={size || '24.0001163482666'}
      viewBox="0 0 24.000072479248047 24.0001163482666"
      {...otherProps}
    >
      <Svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.587 15.132c.27-.998.413-2.048.413-3.132 0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12c1.084 0 2.134-.144 3.132-.413a6 6 0 118.455-8.455z"
          fill="url(#paint0_linear_1_861)"
        />
        <Mask
          id="a"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.587 15.132c.27-.998.413-2.048.413-3.132 0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12c1.084 0 2.134-.144 3.132-.413a6 6 0 118.455-8.455z"
            fill="url(#paint1_linear_1_861)"
          />
        </Mask>
        <G mask="url(#a)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.658 16.05a5.478 5.478 0 00-6.199-8.667c-.515.208-.976.505-1.422.832-.539.4-1.153.52-1.812.4-.51-.091-.964-.307-1.402-.562a1.074 1.074 0 01-.521-.74 1.67 1.67 0 00-3.296.226c-.1 1.2 1.092 2.114 2.225 1.7a1.139 1.139 0 01.964.07c.32.165.624.362.905.588.695.57 1.036 1.284.956 2.194-.051.643.02 1.289.209 1.905a5.478 5.478 0 009.393 2.053zm-6.455-5.097a2.761 2.761 0 104.591 3.07 2.761 2.761 0 00-4.59-3.07z"
            fill="#fff"
          />
        </G>
        <Circle cx="19" cy="19" r="5" fill="#D9D9D9" />
        <Path d="M19 24a5 5 0 100-10 5 5 0 000 10z" fill="#6284F5" />
        <Path
          opacity=".6"
          d="M19.005 18.131l-2.046.93 2.046 1.21 2.046-1.21-2.046-.93z"
          fill="#fff"
        />
        <Path
          opacity=".45"
          d="M16.96 19.062l2.046 1.21v-4.605l-2.046 3.395z"
          fill="#fff"
        />
        <Path
          opacity=".8"
          d="M19.006 15.667v4.605l2.046-1.21-2.046-3.395z"
          fill="#fff"
        />
        <Path
          opacity=".45"
          d="M16.959 19.45l2.046 2.883V20.66l-2.046-1.21z"
          fill="#fff"
        />
        <Path
          opacity=".8"
          d="M19.005 20.659v1.674l2.047-2.883-2.047 1.209z"
          fill="#fff"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_1_861"
            x1="0"
            y1="0"
            x2="24"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#180F3E" />
            <Stop offset="1" stopColor="#6221EB" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear_1_861"
            x1="0"
            y1="0"
            x2="24"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#180F3E" />
            <Stop offset="1" stopColor="#6221EB" />
          </LinearGradient>
        </Defs>
      </Svg>
    </Svg>
  );
};

IconChainXterioEthScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconChainXterioEthScalable;

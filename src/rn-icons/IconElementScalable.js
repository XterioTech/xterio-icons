import React from 'react';
import PropTypes from 'prop-types';
import {
  Svg,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath
} from 'react-native-svg';

const IconElementScalable = props => {
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
        <G clipPath="url(#clip0_1_691)" fillRule="evenodd" clipRule="evenodd">
          <Path
            d="M17.215 14.705V7.223l4.94-2.628v7.364l-4.94 2.746z"
            fill="url(#paint0_linear_1_691)"
          />
          <Path
            d="M14.045 17.378l.053 6.323-.177.098-6.647-3.652v-2.768h6.771z"
            fill="url(#paint1_linear_1_691)"
          />
          <Path
            d="M17.215 18.262v3.71L13.922 23.8v-5.537h3.293z"
            fill="url(#paint2_linear_1_691)"
          />
          <Path
            d="M10.688 12.807l.002.002-.123 3.71 1.693.94-6.634 3.689-.098-.056-.026-7.308 6.77-3.816v1.902l-1.585.937z"
            fill="url(#paint3_linear_1_691)"
          />
          <Path
            d="M5.629 13.78L.75 11.075v-3.71l5.008 2.655-.13 3.76z"
            fill="url(#paint4_linear_1_691)"
          />
          <Path
            d="M23.801 12.841l-6.586 3.533v3.83l6.586-3.652v-3.71z"
            fill="url(#paint5_linear_1_691)"
          />
          <Path
            d="M2.335 11.9l3.294 1.885v7.364l-3.294-1.885V11.9z"
            fill="#29F6A8"
          />
          <Path
            d="M10.568 16.52v-3.71l.045-.03 6.601 3.596v3.83l-6.646-3.686z"
            fill="url(#paint6_linear_1_691)"
          />
          <Path
            d="M7.4 10.983L.75 7.364 7.4 3.745v7.238z"
            fill="url(#paint7_linear_1_691)"
          />
          <Path
            d="M23.803 12.841l-6.586 3.653-6.65-3.688 1.71-.952-.013.007 1.659.92 3.262-1.815.032-1.777 6.586 3.652z"
            fill="url(#paint8_linear_1_691)"
          />
          <Path
            d="M12.275 10.088h.002l-.08.044-3.266-1.78-1.656.964V1.827l.22-.122 6.551 3.774-.043 7.297-.08.067-1.659-.98.012-1.775z"
            fill="url(#paint9_linear_1_691)"
          />
          <Path
            d="M13.924 12.82V5.479l-.072-.04 3.333-1.804.03.017v7.336l-3.292 1.832z"
            fill="url(#paint10_linear_1_691)"
          />
          <Path
            d="M12.277 10.088l-6.65 3.697-3.292-1.886L8.93 8.232l3.345 1.856z"
            fill="url(#paint11_linear_1_691)"
          />
          <Path
            d="M17.215 7.341V3.653l1.647-.942 3.293 1.885-4.94 2.745z"
            fill="url(#paint12_linear_1_691)"
          />
          <Path
            d="M7.275 1.827l6.646 3.652 3.294-1.827L10.568 0 7.275 1.827z"
            fill="#76FF0B"
          />
        </G>
        <Defs>
          <LinearGradient
            id="paint0_linear_1_691"
            x1="19.53"
            y1="5.666"
            x2="19.823"
            y2="13.789"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#00B368" />
            <Stop offset="1" stopColor="#004A4D" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear_1_691"
            x1="7.274"
            y1="20.589"
            x2="14.099"
            y2="20.589"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#0ECD59" />
            <Stop offset="1" stopColor="#16DE3E" />
          </LinearGradient>
          <LinearGradient
            id="paint2_linear_1_691"
            x1="15.569"
            y1="17.793"
            x2="15.569"
            y2="23.561"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#003A4A" />
            <Stop offset="1" stopColor="#007649" />
          </LinearGradient>
          <LinearGradient
            id="paint3_linear_1_691"
            x1="14.195"
            y1="14.863"
            x2="8.114"
            y2="15.727"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#00AE85" />
            <Stop offset=".994" stopColor="#007258" />
          </LinearGradient>
          <LinearGradient
            id="paint4_linear_1_691"
            x1="3.223"
            y1="8.686"
            x2="3.296"
            y2="13.317"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#12C951" />
            <Stop offset="1" stopColor="#009256" />
          </LinearGradient>
          <LinearGradient
            id="paint5_linear_1_691"
            x1="17.214"
            y1="16.524"
            x2="23.8"
            y2="16.524"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#005255" />
            <Stop offset="1" stopColor="#008147" />
          </LinearGradient>
          <LinearGradient
            id="paint6_linear_1_691"
            x1="14.441"
            y1="13.692"
            x2="13.642"
            y2="18.079"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#44E28D" />
            <Stop offset="1" stopColor="#10E2AA" />
          </LinearGradient>
          <LinearGradient
            id="paint7_linear_1_691"
            x1=".75"
            y1="7.363"
            x2="7.399"
            y2="7.363"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#91FF3C" />
            <Stop offset="1" stopColor="#64F562" />
          </LinearGradient>
          <LinearGradient
            id="paint8_linear_1_691"
            x1="10.566"
            y1="12.842"
            x2="23.802"
            y2="12.842"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#91FF3C" />
            <Stop offset="1" stopColor="#0DE2AC" />
          </LinearGradient>
          <LinearGradient
            id="paint9_linear_1_691"
            x1="10.62"
            y1="3.584"
            x2="10.694"
            y2="10.988"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#03E168" />
            <Stop offset="1" stopColor="#05C35E" />
          </LinearGradient>
          <LinearGradient
            id="paint10_linear_1_691"
            x1="14.158"
            y1="5.167"
            x2="16.39"
            y2="10.367"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#00837B" />
            <Stop offset="1" stopColor="#03824D" />
          </LinearGradient>
          <LinearGradient
            id="paint11_linear_1_691"
            x1="4.03"
            y1="12.901"
            x2="10.117"
            y2="9.103"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#91FF3C" />
            <Stop offset="1" stopColor="#52F171" />
          </LinearGradient>
          <LinearGradient
            id="paint12_linear_1_691"
            x1="17.099"
            y1="6.059"
            x2="20.16"
            y2="3.603"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#11E2AA" />
            <Stop offset=".638" stopColor="#8DFE40" />
          </LinearGradient>
          <ClipPath id="clip0_1_691">
            <Path fill="#fff" d="M0 0h24v24H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </Svg>
  );
};

IconElementScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconElementScalable;

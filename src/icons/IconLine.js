import React from 'react';
import PropTypes from 'prop-types';

const originFill = [
  'url(#paint0_linear_26_40)',
  'url(#paint1_linear_26_40)',
  'url(#paint2_linear_26_40)',
  'url(#paint3_linear_26_40)',
  'url(#paint4_linear_26_40)'
];

const IconLine = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M16.393 4H7.607A3.607 3.607 0 004 7.607v8.786A3.607 3.607 0 007.607 20h8.786A3.607 3.607 0 0020 16.393V7.607A3.607 3.607 0 0016.393 4z"
        fill={color || originFill[0]}
      />
      <path
        d="M17.333 11.246c0-2.387-2.393-4.329-5.334-4.329-2.942 0-5.335 1.942-5.335 4.329 0 2.14 1.9 3.932 4.461 4.271.174.038.41.115.47.263.054.135.035.347.018.482l-.076.457c-.024.135-.108.527.461.288.57-.24 3.072-1.809 4.191-3.098.773-.847 1.144-1.709 1.144-2.663z"
        fill="#141430"
      />
      <path
        d="M15.558 12.624h-1.5a.1.1 0 01-.1-.1v-2.327a.1.1 0 01.1-.1h1.5a.1.1 0 01.1.1v.379a.1.1 0 01-.1.1H14.54v.392h1.018a.1.1 0 01.1.1v.382a.1.1 0 01-.1.1H14.54v.393h1.018a.1.1 0 01.1.1v.378a.1.1 0 01-.06.096.101.101 0 01-.04.007z"
        fill={color || originFill[1]}
      />
      <path
        d="M10.014 12.624a.1.1 0 00.1-.1v-.377a.1.1 0 00-.1-.1H8.996v-1.85a.1.1 0 00-.1-.1h-.38a.1.1 0 00-.1.1v2.326a.1.1 0 00.1.1h1.5l-.002.002z"
        fill={color || originFill[2]}
      />
      <path
        d="M10.916 10.092h-.377a.102.102 0 00-.102.102v2.329c0 .056.045.101.102.101h.377a.102.102 0 00.102-.101v-2.329a.102.102 0 00-.102-.102z"
        fill={color || originFill[3]}
      />
      <path
        d="M13.492 10.092h-.378a.1.1 0 00-.1.1v1.383l-1.065-1.438a.061.061 0 00-.008-.01l-.007-.007-.005-.004h-.003l-.005-.004h-.003l-.006-.003h-.424a.1.1 0 00-.1.1v2.328a.1.1 0 00.1.1h.379a.1.1 0 00.1-.1V11.14l1.066 1.44a.1.1 0 00.027.027l.005.004h.004l.004.002h.016a.117.117 0 00.027.004h.376a.1.1 0 00.1-.1v-2.322a.1.1 0 00-.1-.103z"
        fill={color || originFill[4]}
      />
      <defs>
        <linearGradient
          id="paint0_linear_26_40"
          x1="4"
          y1="12"
          x2="20"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9EE6FC" />
          <stop offset="1" stopColor="#EBB9E7" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_26_40"
          x1="13.958"
          y1="11.361"
          x2="15.658"
          y2="11.361"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9EE6FC" />
          <stop offset="1" stopColor="#EBB9E7" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_26_40"
          x1="8.416"
          y1="11.361"
          x2="10.114"
          y2="11.361"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9EE6FC" />
          <stop offset="1" stopColor="#EBB9E7" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_26_40"
          x1="10.437"
          y1="11.358"
          x2="11.018"
          y2="11.358"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9EE6FC" />
          <stop offset="1" stopColor="#EBB9E7" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_26_40"
          x1="11.389"
          y1="11.365"
          x2="13.592"
          y2="11.365"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9EE6FC" />
          <stop offset="1" stopColor="#EBB9E7" />
        </linearGradient>
      </defs>
    </svg>
  );
};

IconLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconLine;

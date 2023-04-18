import React from 'react';
import PropTypes from 'prop-types';

const IconXterioScalable = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_222_898)">
          <path
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            fill="url(#paint0_linear_222_898)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.658 16.05a5.478 5.478 0 00-6.199-8.667c-.515.208-.976.505-1.422.832-.539.4-1.153.52-1.812.4-.51-.09-.964-.307-1.402-.562a1.074 1.074 0 01-.521-.74 1.67 1.67 0 00-3.296.226c-.1 1.2 1.092 2.114 2.225 1.7a1.139 1.139 0 01.964.07c.32.165.624.362.905.588.695.57 1.036 1.284.956 2.194-.051.643.02 1.289.209 1.905a5.478 5.478 0 009.393 2.053zm-6.455-5.097a2.761 2.761 0 104.591 3.07 2.761 2.761 0 00-4.59-3.07z"
            fill="#0A1161"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_222_898"
            x1="0"
            y1="0"
            x2="28.56"
            y2="15.979"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CBF2FE" />
            <stop offset=".391" stopColor="#7DD5F9" />
            <stop offset=".735" stopColor="#E6B1F7" />
            <stop offset="1" stopColor="#E1DFA2" />
          </linearGradient>
          <clipPath id="clip0_222_898">
            <rect width="24" height="24" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconXterioScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconXterioScalable.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconXterioScalable;

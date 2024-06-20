import React from 'react';
import PropTypes from 'prop-types';

const IconChainXterioBscScalable = props => {
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
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.587 15.132c.27-.998.413-2.048.413-3.132 0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12c1.084 0 2.134-.144 3.132-.413a6 6 0 118.455-8.455z"
          fill="url(#paint0_linear_1_847)"
        />
        <mask
          id="a"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.587 15.132c.27-.998.413-2.048.413-3.132 0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12c1.084 0 2.134-.144 3.132-.413a6 6 0 118.455-8.455z"
            fill="url(#paint1_linear_1_847)"
          />
        </mask>
        <g mask="url(#a)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.658 16.05a5.478 5.478 0 00-6.199-8.667c-.515.208-.976.505-1.422.832-.539.4-1.153.52-1.812.4-.51-.09-.964-.307-1.402-.562a1.074 1.074 0 01-.521-.74 1.67 1.67 0 00-3.296.226c-.1 1.2 1.092 2.114 2.225 1.7a1.139 1.139 0 01.964.07c.32.165.624.362.905.588.695.57 1.036 1.284.956 2.194-.051.643.02 1.289.209 1.905a5.478 5.478 0 009.393 2.053zm-6.455-5.097a2.761 2.761 0 104.591 3.07 2.761 2.761 0 00-4.59-3.07z"
            fill="#fff"
          />
        </g>
        <circle cx="19" cy="19" r="5" fill="#D9D9D9" />
        <path d="M19 24a5 5 0 100-10 5 5 0 000 10z" fill="#0B0E11" />
        <path
          d="M17.219 16.699l1.761-1.025 1.761 1.025-.647.378-1.114-.646-1.114.646-.647-.378zm3.522 1.293l-.647-.38-1.114.647-1.114-.646-.647.379v.757l1.113.647v1.293l.648.378.648-.378v-1.293l1.113-.646v-.758zm0 2.05v-.758l-.647.38v.757l.647-.38zm.46.268l-1.114.646v.758l1.762-1.025v-2.05l-.648.378v1.293zm-.647-2.965l.647.379v.757l.648-.379v-.757l-.648-.379-.647.379zm-2.221 3.886v.758l.647.378.648-.378v-.758l-.648.379-.648-.379zm-1.114-1.19l.647.38v-.758l-.647-.379v.758zm1.113-2.696l.648.379.648-.379-.648-.379-.648.379zm-1.573.379l.648-.379-.648-.379-.648.379v.758l.648.378v-.757zm0 1.293l-.648-.38v2.05l1.761 1.026v-.757l-1.113-.646v-1.293z"
          fill="#F1B90C"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_847"
            x1="0"
            y1="0"
            x2="24"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#180F3E" />
            <stop offset="1" stopColor="#6221EB" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_847"
            x1="0"
            y1="0"
            x2="24"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#180F3E" />
            <stop offset="1" stopColor="#6221EB" />
          </linearGradient>
        </defs>
      </svg>
    </svg>
  );
};

IconChainXterioBscScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconChainXterioBscScalable;

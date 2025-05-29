import React from 'react';
import PropTypes from 'prop-types';

const IconOthers = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '32'}
      height={size || '32'}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <svg
        width="32"
        height="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="url(#paint0_linear_0_801)" d="M0 0h32v32H0z" />
        <path
          d="M8.527 22.667V19.15h1.7l1.722-2.941-1.652-2.59H8.773v-3.516h6.235l2.027 3.14 1.512-3.14h3.633v3.516h-1.582l-1.582 2.695 1.828 2.836h1.582v3.516h-6.352l-2.086-3.27-1.582 3.27H8.527z"
          fill="#0A1161"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_801"
            x1="0"
            y1="0"
            x2="38.08"
            y2="21.305"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CBF2FE" />
            <stop offset=".391" stopColor="#7DD5F9" />
            <stop offset=".735" stopColor="#E6B1F7" />
            <stop offset="1" stopColor="#E1DFA2" />
          </linearGradient>
        </defs>
      </svg>
    </svg>
  );
};

IconOthers.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconOthers;

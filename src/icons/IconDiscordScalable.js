import React from 'react';
import PropTypes from 'prop-types';

const originFill = ['url(#paint0_linear_222_905)'];

const IconDiscordScalable = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
      style={{ color }}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
    >
      <svg>
        <path
          d="M16.87 7.4a.036.036 0 00-.018-.016 11.548 11.548 0 00-2.85-.883.043.043 0 00-.046.021c-.13.237-.249.48-.355.729a10.665 10.665 0 00-3.2 0 7.35 7.35 0 00-.36-.729.045.045 0 00-.046-.022c-.985.17-1.943.467-2.85.884a.04.04 0 00-.019.016c-1.815 2.71-2.312 5.355-2.068 7.966a.049.049 0 00.018.032 11.612 11.612 0 003.496 1.767.046.046 0 00.05-.016c.269-.368.508-.757.714-1.163a.044.044 0 00-.024-.062 7.654 7.654 0 01-1.092-.52.046.046 0 01-.022-.036.045.045 0 01.017-.039 5.87 5.87 0 00.217-.17.044.044 0 01.046-.006c2.29 1.046 4.771 1.046 7.035 0a.043.043 0 01.046.006c.071.059.144.115.218.17a.044.044 0 01.018.039.045.045 0 01-.022.036 7.176 7.176 0 01-1.093.52.045.045 0 00-.024.062c.21.404.449.793.715 1.162a.044.044 0 00.049.017 11.573 11.573 0 003.502-1.767.046.046 0 00.012-.014.047.047 0 00.006-.018c.292-3.018-.49-5.64-2.07-7.965zm-7.192 6.376c-.69 0-1.258-.633-1.258-1.41 0-.778.558-1.411 1.258-1.411.707 0 1.27.638 1.259 1.41 0 .778-.558 1.41-1.259 1.41zm4.652 0c-.69 0-1.258-.633-1.258-1.41 0-.778.558-1.411 1.258-1.411.707 0 1.27.638 1.258 1.41 0 .778-.551 1.41-1.258 1.41z"
          fill={color || originFill[0]}
        />
        <defs>
          <linearGradient
            id="paint0_linear_222_905"
            x1="5"
            y1="12.017"
            x2="19"
            y2="12.017"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9EE6FC" />
            <stop offset="1" stop-color="#EBB9E7" />
          </linearGradient>
        </defs>
      </svg>
    </svg>
  );
};

IconDiscordScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconDiscordScalable;

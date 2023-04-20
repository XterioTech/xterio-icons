import React from 'react';
import PropTypes from 'prop-types';

const originFill = 'colorful';

const IconChainBscScalable = props => {
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
        <g clipPath="url(#clip0_222_888)">
          <path
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            fill="#0B0E11"
          />
          <path
            d="M7.725 6.477l4.227-2.46 4.227 2.46-1.554.91-2.673-1.552L9.28 7.386l-1.554-.909zm8.454 3.104l-1.554-.91-2.673 1.552L9.28 8.672l-1.554.909v1.818l2.673 1.55v3.104l1.554.91 1.554-.91V12.95l2.673-1.55V9.58zm0 4.92v-1.818l-1.554.909v1.818l1.554-.91zm1.104.643l-2.673 1.551v1.818l4.227-2.46v-4.92l-1.554.908v3.103zM15.73 8.028l1.554.91v1.817l1.554-.909V8.028l-1.554-.909-1.554.91zm-5.33 9.327v1.818l1.553.91 1.554-.91v-1.818l-1.554.91-1.554-.91zm-2.674-2.854l1.554.909v-1.818l-1.554-.91v1.819zm2.673-6.473l1.554.91 1.554-.91-1.554-.909-1.554.91zm-3.775.91l1.554-.91-1.554-.909-1.556.91v1.817l1.556.91V8.936zm0 3.104l-1.556-.912v4.92l4.227 2.462v-1.817l-2.671-1.55v-3.103z"
            fill="#F1B90C"
          />
        </g>
        <defs>
          <clipPath id="clip0_222_888">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconChainBscScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconChainBscScalable;

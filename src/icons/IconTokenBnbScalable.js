import React from 'react';
import PropTypes from 'prop-types';

const originFill = 'colorful';

const IconTokenBnbScalable = props => {
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
        <g clipPath="url(#clip0_222_889)">
          <path
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            fill="#F0B90B"
          />
          <path
            d="M7.724 6.476l4.227-2.46 4.227 2.46-1.554.909-2.673-1.551-2.673 1.55-1.554-.908zm8.454 3.103l-1.554-.91-2.673 1.552-2.673-1.55-1.554.908v1.818l2.673 1.551v3.104l1.554.909 1.554-.91v-3.103l2.673-1.55V9.58zm0 4.92v-1.818l-1.554.91v1.817l1.554-.909zm1.104.644l-2.673 1.55v1.819l4.227-2.46v-4.92l-1.554.907v3.104zm-1.554-7.116l1.554.909v1.818l1.554-.91V8.028l-1.554-.91-1.554.91zm-5.33 9.327v1.818l1.553.909 1.554-.91v-1.817l-1.554.909-1.554-.91zm-2.674-2.855l1.554.91V13.59l-1.554-.909V14.5zm2.673-6.472l1.554.909 1.554-.91-1.554-.908-1.554.909zm-3.775.909l1.554-.91-1.554-.908-1.556.909v1.818l1.556.909V8.936zm0 3.105l-1.556-.912v4.92l4.227 2.461v-1.816l-2.671-1.551V12.04z"
            fill="#fff"
          />
        </g>
        <defs>
          <clipPath id="clip0_222_889">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconTokenBnbScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconTokenBnbScalable;

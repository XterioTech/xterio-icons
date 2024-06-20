import React from 'react';
import PropTypes from 'prop-types';

const IconChainArbitrumScalable = props => {
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
        <g clipPath="url(#clip0_1_361)">
          <path
            d="M2.17 7.295v9.41c0 .6.321 1.155.841 1.455l8.15 4.706c.52.299 1.16.299 1.68 0l8.15-4.706c.52-.3.842-.855.842-1.456V7.295c0-.6-.321-1.156-.841-1.455l-8.15-4.706c-.52-.299-1.16-.299-1.68 0L3.008 5.84c-.52.3-.84.855-.84 1.455z"
            fill="#213147"
          />
          <path
            d="M13.78 13.825l-1.163 3.187a.408.408 0 000 .273l2 5.484 2.313-1.335-2.776-7.61a.199.199 0 00-.374 0zM16.11 8.465a.199.199 0 00-.374 0l-1.163 3.187a.408.408 0 000 .274l3.277 8.978 2.313-1.336L16.11 8.465z"
            fill="#12AAFF"
          />
          <path
            d="M12 1.487c.058 0 .115.016.166.043l8.82 5.092c.102.059.166.17.166.286v10.18a.33.33 0 01-.166.286l-8.82 5.092a.326.326 0 01-.165.043.351.351 0 01-.166-.043l-8.82-5.088a.331.331 0 01-.165-.286V6.91a.33.33 0 01.165-.285l8.82-5.092a.332.332 0 01.166-.045zM12 0c-.313 0-.628.08-.91.244l-8.818 5.09c-.563.325-.91.926-.91 1.575v10.182c0 .65.347 1.25.91 1.575l8.82 5.092a1.814 1.814 0 001.82 0l8.82-5.092c.564-.325.91-.926.91-1.575V6.909c0-.65-.346-1.25-.91-1.575L12.912.244A1.814 1.814 0 0012 0z"
            fill="#9DCCED"
          />
          <path
            d="M6.167 20.915l.812-2.221 1.633 1.357-1.527 1.394-.918-.53z"
            fill="#213147"
          />
          <path
            d="M11.257 6.18H9.021a.398.398 0 00-.374.263L3.854 19.58l2.312 1.336 5.278-14.467a.198.198 0 00-.187-.268zM15.17 6.18h-2.236a.398.398 0 00-.374.263l-5.473 15L9.4 22.78l5.957-16.33a.2.2 0 00-.187-.268z"
            fill="#fff"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_361">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconChainArbitrumScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconChainArbitrumScalable;

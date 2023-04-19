import React from 'react';
import PropTypes from 'prop-types';

const IconInfo12 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
      style={{ color }}
      width={size || '12'}
      height={size || '12'}
      viewBox="0 0 12 12"
    >
      <svg>
        <mask
          id="a"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="12"
          height="12"
        >
          <path fill="#D9D9D9" d="M0 0h12v12H0z" />
        </mask>
        <g mask="url(#a)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 10a4 4 0 100-8 4 4 0 000 8zm0 1A5 5 0 106 1a5 5 0 000 10zm-.5-7V3h1v1h-1zm1 1.5a.5.5 0 00-.676-.468l-1 .375.351.936.325-.122V8.5a.5.5 0 00.675.468l1-.375-.35-.936-.325.122V5.5z"
            fill="currentColor"
          />
        </g>
      </svg>
    </svg>
  );
};

IconInfo12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconInfo12;

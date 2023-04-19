import React from 'react';
import PropTypes from 'prop-types';

const IconChainPolygonScalable = props => {
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
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_222_887)">
          <path
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            fill="#8247E5"
          />
          <path
            d="M15.789 9.65a.913.913 0 00-.86 0l-2.006 1.183-1.361.752-1.97 1.182a.913.913 0 01-.86 0l-1.54-.931a.873.873 0 01-.43-.753v-1.79c0-.287.143-.574.43-.753l1.54-.895a.913.913 0 01.86 0l1.54.93c.25.144.43.43.43.753v1.182l1.36-.788V8.504a.884.884 0 00-.43-.752L9.628 6.068a.913.913 0 00-.86 0L5.83 7.788a.788.788 0 00-.43.716v3.367c0 .287.144.573.43.753l2.902 1.683c.25.143.573.143.86 0l1.97-1.146 1.36-.788 1.97-1.146a.913.913 0 01.86 0l1.54.895c.252.143.43.43.43.752v1.791a.884.884 0 01-.43.753l-1.504.895a.913.913 0 01-.86 0l-1.54-.895a.873.873 0 01-.43-.753V13.52l-1.36.788v1.182c0 .287.143.573.43.752l2.9 1.684c.252.143.574.143.86 0l2.902-1.684c.25-.143.43-.43.43-.752v-3.403a.883.883 0 00-.43-.752L15.788 9.65z"
            fill="#fff"
          />
        </g>
        <defs>
          <clipPath id="clip0_222_887">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconChainPolygonScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconChainPolygonScalable;

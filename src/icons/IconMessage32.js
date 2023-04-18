import React from 'react';
import PropTypes from 'prop-types';

const IconMessage32 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="a"
          style={{maskType: 'luminance'}}
          maskUnits="userSpaceOnUse"
          x="5"
          y="3"
          width="22"
          height="22"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.316 3l-2.737 1.368v1.78A9.002 9.002 0 007 15.035V21l-2 4h22l-2-4v-5.964c0-4.525-3.34-8.268-7.684-8.905V3z"
          />
        </mask>
        <g mask="url(#a)">
          <path d="M14.579 4.368l-.895-1.788-1.105.552v1.236h2zM17.314 3h2V-.236L16.421 1.21 17.315 3zm-2.737 3.147l.314 1.976 1.686-.268V6.147h-2zM7 21l1.789.894.21-.422V21H7zm-2 4l-1.79-.894L1.765 27H5v-2zm22 0v2h3.236l-1.447-2.894-1.79.894zm-2-4h-2v.472l.21.422L25 21zM17.315 6.131h-2V7.86l1.71.25.29-1.979zm-1.842.026L18.21 4.79 16.42 1.21 13.684 2.58l1.789 3.577zm1.105-.01V4.368h-4v1.78h4zM9 15.036a7.002 7.002 0 015.892-6.913l-.627-3.95C9.012 5.005 5 9.551 5 15.035h4zM9 21v-5.964H5V21h4zm-2.211 4.894l2-4-3.578-1.788-2 4 3.578 1.788zM26.999 23H5v4h22v-4zm-3.788-1.106l2 4 3.578-1.788-2-4-3.578 1.788zM23 15.036V21h4v-5.964h-4zM17.026 8.11A7.002 7.002 0 0123 15.036h4c0-5.533-4.082-10.106-9.395-10.884l-.58 3.958zM15.316 3v3.131h4V3h-4z" />
        </g>
        <path d="M11.375 27H21l-1.375 2H10l1.375-2z" />
      </svg>
    </svg>
  );
};

IconMessage32.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconMessage32.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconMessage32;

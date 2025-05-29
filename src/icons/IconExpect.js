import React from 'react';
import PropTypes from 'prop-types';

const IconExpect = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.468 5.71H6.004v6.988l-1.643 1.21V4.068h17.75v16.107h-11.68l-1.505-2.65-1.222-2.115-2.454 1.787 1.865.5-.863 3.158-1.585-.433.427-1.566-3.594-.963 6.714-4.887 2.138 3.703 1.035 1.822H20.468V15.9h-6.246V8.34h6.246V5.71zm0 4.274v4.273h-4.602V9.984h4.602zm-.987 1.315h-2.3v1.643h1.972l.328-1.643z"
        fill="currentColor"
      />
    </svg>
  );
};

IconExpect.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconExpect;

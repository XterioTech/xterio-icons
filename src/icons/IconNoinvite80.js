import React from 'react';
import PropTypes from 'prop-types';

const IconNoinvite80 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '80'}
      height={size || '80'}
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.5 28a9.5 9.5 0 0119 0v1.22c0 2.141-.85 4.195-2.365 5.71l-1.418 1.417a8.934 8.934 0 00-2.617 6.318c0 2.359.627 4.617 1.754 6.581a16.482 16.482 0 013.295-5.687 8.248 8.248 0 01-.049-.894c0-1.043.415-2.044 1.153-2.782l1.418-1.418a13.076 13.076 0 003.83-9.246V28c0-8.008-6.492-14.5-14.5-14.5-8.009 0-14.5 6.492-14.5 14.5v1.22c0 3.467 1.377 6.793 3.83 9.245l1.417 1.418a3.935 3.935 0 011.152 2.782 8.225 8.225 0 01-4.85 7.5l-6.58 2.962a21.019 21.019 0 00-6.237 4.305L12.465 59.2 16 62.735l1.768-1.767a16.017 16.017 0 014.753-3.281l6.581-2.962a13.225 13.225 0 007.798-12.06c0-2.37-.941-4.642-2.617-6.318l-1.417-1.417a8.075 8.075 0 01-2.366-5.71V28zM61 58.536l-6.232 6.232-3.536-3.536L57.465 55l-6.233-6.232 3.536-3.536L61 51.465l6.232-6.233 3.536 3.536L64.535 55l6.233 6.232-3.536 3.536L61 58.536z"
        fill="currentColor"
      />
    </svg>
  );
};

IconNoinvite80.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconNoinvite80;

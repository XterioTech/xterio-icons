import React from 'react';
import PropTypes from 'prop-types';

const IconGoogleplayScalable = props => {
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
        d="M12.753 12.033c0-.06-.06-.181-.12-.241l-7.83-7.47c-.06-.06-.181-.06-.241-.06-.12 0-.181.06-.241.181-.06.181-.12.362-.12.542V19.08c0 .18.06.361.12.542.06.06.12.18.24.18h.06c.061 0 .182 0 .182-.06l7.89-7.469c.06-.06.06-.18.06-.24zm.422-.603c.06.06.12.06.18.06s.12 0 .181-.06l2.168-2.048c.06-.06.12-.18.12-.24 0-.121-.06-.181-.18-.242L6.248 3.78c-.18-.12-.361-.12-.542-.18-.12 0-.24.06-.301.18-.06.121 0 .242.06.362l7.71 7.288zm.421 1.205a.291.291 0 00-.421 0l-7.71 7.288c-.06.12-.12.24-.06.361.06.12.18.181.301.181.18 0 .361-.06.542-.18l9.336-5.18c.06-.06.12-.121.18-.242 0-.12 0-.18-.12-.24l-2.048-1.988zm5.481-1.867L16.79 9.503c-.12-.06-.241-.06-.362.06l-2.409 2.289c-.06.06-.12.12-.12.24 0 .121.06.181.12.242l2.349 2.228c.06.06.12.06.18.06s.121 0 .121-.06l2.41-1.325c.421-.24.722-.723.722-1.204 0-.482-.18-1.024-.723-1.265z"
        fill="currentColor"
      />
    </svg>
  );
};

IconGoogleplayScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconGoogleplayScalable;

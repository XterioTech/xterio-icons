import React from 'react';
import PropTypes from 'prop-types';

const IconShow24 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.959 12a10.613 10.613 0 01-.319.865c-.29.695-.752 1.618-1.44 2.535-1.363 1.818-3.592 3.6-7.2 3.6-3.607 0-5.836-1.782-7.2-3.6A11.893 11.893 0 013.042 12a10.62 10.62 0 01.319-.865c.29-.695.752-1.618 1.44-2.535C6.163 6.782 8.392 5 12 5c3.607 0 5.836 1.782 7.2 3.6a11.892 11.892 0 011.758 3.4z"
          stroke="#FEFEFE"
          strokeWidth="2"
        />
        <path
          d="M12 15a3 3 0 100-6 3 3 0 000 6z"
          stroke="#FEFEFE"
          strokeWidth="2"
        />
      </svg>
    </svg>
  );
};

IconShow24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconShow24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconShow24;

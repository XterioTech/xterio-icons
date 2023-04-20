import React from 'react';
import PropTypes from 'prop-types';

const IconXsoulShare40 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '40'}
      height={size || '40'}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <svg>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37.32 10L20 0 2.68 10v20L20 40l17.32-10V10zM3.68 29.423V10.577L20 1.155l16.32 9.422v18.846L20 38.845 3.68 29.423zm13.103-9.726l3.47-2.082a4.5 4.5 0 10-1.03-1.714l-3.546 2.127a4 4 0 100 5.945L20 26.566a3.5 3.5 0 10.573-1.989l-3.791-2.274c.14-.409.217-.848.217-1.304 0-.456-.076-.895-.217-1.303zM23.5 12a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM11 21a2 2 0 114 0 2 2 0 01-4 0zm12.5 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconXsoulShare40.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconXsoulShare40;

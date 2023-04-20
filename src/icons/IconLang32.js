import React from 'react';
import PropTypes from 'prop-types';

const originFill = 'normal';

const IconLang32 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '32'}
      height={size || '32'}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <svg>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.828 25.241A10.008 10.008 0 0025.95 17H21.98c-.137 3.31-.945 6.24-2.152 8.241zM16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12zM12.172 6.759A10.009 10.009 0 006.05 15h3.971c.137-3.31.945-6.24 2.152-8.241zM12.022 15c.12-2.651.706-4.954 1.524-6.59C14.526 6.45 15.51 6 16 6c.491 0 1.474.45 2.454 2.41.818 1.636 1.404 3.939 1.524 6.59h-7.956zm0 2c.12 2.651.706 4.954 1.524 6.59C14.526 25.55 15.51 26 16 26c.491 0 1.474-.45 2.454-2.41.818-1.636 1.404-3.939 1.524-6.59h-7.956zm-2.002 0c.137 3.31.945 6.24 2.152 8.241A10.009 10.009 0 016.05 17h3.971zm11.96-2c-.137-3.31-.945-6.24-2.152-8.241A10.008 10.008 0 0125.95 15H21.98z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconLang32.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconLang32;

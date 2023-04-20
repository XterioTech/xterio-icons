import React from 'react';
import PropTypes from 'prop-types';

const originFill = 'normal';

const IconWalletConnected16 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '16'}
      height={size || '16'}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <svg>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5 3.5h-9v8h9v-1.25H7.25v-5.5h5.25V3.5zm0 2.75v2.5H8.75v-2.5h3.75zM2 2v11h12V2H2zm9.5 4.75h-2v1.5H11l.5-1.5z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconWalletConnected16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWalletConnected16;

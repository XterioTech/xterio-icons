import React from 'react';
import PropTypes from 'prop-types';

const IconUnname = props => {
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
        d="M9.026 3.575a15.166 15.166 0 015.948 0l1.389.278a1 1 0 01.765.706L18.66 9.92l3.712 1.485a1 1 0 01-.13 1.898l-3.67.917-1.444 5.055a1 1 0 01-1.384.631l-1.7-.793a4.834 4.834 0 00-4.088 0l-1.7.793a1 1 0 01-1.384-.631L5.427 14.22l-3.67-.917a1 1 0 01-.129-1.899L5.34 9.92 6.872 4.56a1 1 0 01.765-.706l1.389-.278zm7.33 11.118c-.453.077-.908.142-1.363.195a1 1 0 11-1.99.154c-.669.026-1.337.026-2.005 0a.999.999 0 11-1.992-.154c-.455-.053-.91-.118-1.363-.195l.83 2.905.637-.298a6.835 6.835 0 015.78 0l.637.298.829-2.905zm-1.774-9.157a13.17 13.17 0 00-5.165 0l-.79.159-1.499 5.247a1 1 0 01-.59.653l-1.295.518.936.234c3.822.955 7.82.955 11.642 0l.936-.233-1.295-.52a1 1 0 01-.59-.652l-1.5-5.247-.79-.159z"
        fill="currentColor"
      />
    </svg>
  );
};

IconUnname.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconUnname;

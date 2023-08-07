import React from 'react';
import PropTypes from 'prop-types';

const IconTxProcessingScalable = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '64'}
      height={size || '64'}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 12c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20zM8 32C8 18.745 18.745 8 32 8s24 10.745 24 24-10.745 24-24 24S8 45.255 8 32z"
        fill="#9598B9"
        fillOpacity="0.1"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 8h2c13.255 0 24 10.745 24 24v2h-4v-2c0-11.046-8.954-20-20-20h-2V8zM42.904 39.702A8.558 8.558 0 0045 34.1a8.605 8.605 0 00-.337-2.376c-1.388-4.874-6.73-7.47-11.446-5.564-.805.326-1.524.79-2.221 1.301-.842.626-1.802.812-2.833.626-.796-.143-1.506-.48-2.19-.879a1.678 1.678 0 01-.744-.901c-.03-.082-.05-.17-.07-.256-.014-.061-.028-.122-.046-.182a2.61 2.61 0 00-5.104.535c-.156 1.875 1.706 3.303 3.477 2.657a1.779 1.779 0 011.505.109c.502.259.976.567 1.416.92 1.084.89 1.618 2.006 1.493 3.427a7.978 7.978 0 00.326 2.977 8.56 8.56 0 0014.678 3.208zm-10.087-7.965a4.315 4.315 0 00-.728 2.397 4.321 4.321 0 004.31 4.316 4.314 4.314 0 10-3.582-6.713z"
        fill="#0A1161"
      />
    </svg>
  );
};

IconTxProcessingScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconTxProcessingScalable;

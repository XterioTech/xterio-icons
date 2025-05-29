import React from 'react';
import PropTypes from 'prop-types';

const IconReport = props => {
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
        d="M12 2.6a1 1 0 01.866.5l9 15.6A1 1 0 0121 20.2H3a1 1 0 01-.866-1.5l9-15.6A1 1 0 0112 2.6zM4.732 18.2h14.537L12 5.6 4.732 18.2zM13 17h-2v-2h2v2zm0-3h-2V9h2v5z"
        fill="currentColor"
      />
    </svg>
  );
};

IconReport.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconReport;

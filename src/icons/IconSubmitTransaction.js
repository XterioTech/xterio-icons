import React from 'react';
import PropTypes from 'prop-types';

const IconSubmitTransaction = props => {
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
        d="M20.063 9.838h-1.875v-4.4H5.063v12.297l1.736-1.172h4.579v1.875H7.372l-4.184 2.827V3.562h16.875v6.276zm-3.188 6.1c1.473 0 2.45.44 3.071.98.303.263.502.533.628.75.24.411.332.884.468 1.336l-1.796.538-.262-.872a1.144 1.144 0 00-.269-.338c-.24-.21-.764-.52-1.84-.52s-1.6.31-1.84.52a1.144 1.144 0 00-.27.338l-.261.872-1.796-.538c.106-.352.184-.718.327-1.058a2.41 2.41 0 01.14-.278c.126-.217.326-.487.629-.75.622-.54 1.598-.98 3.071-.98zm0-5.063a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm-5.813 3.188H7.688v-1.876h3.375v1.876zm5.813-1.313a.375.375 0 100 .75.375.375 0 000-.75zm-1.313-2.438H7.689V8.438h7.875v1.874z"
        fill="currentColor"
      />
    </svg>
  );
};

IconSubmitTransaction.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSubmitTransaction;

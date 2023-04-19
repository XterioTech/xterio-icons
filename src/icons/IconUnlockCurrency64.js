import React from 'react';
import PropTypes from 'prop-types';

const IconUnlockCurrency64 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
      style={{ color }}
      width={size || '64'}
      height={size || '64'}
      viewBox="0 0 64 64"
    >
      <svg>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.525 14.848c-.422.37-.508.591-.523.652.015.06.101.281.523.652.575.504 1.55 1.073 2.971 1.6C19.32 18.803 23.386 19.5 28 19.5s8.681-.699 11.504-1.747c1.42-.528 2.396-1.097 2.971-1.601.422-.37.508-.592.523-.652-.015-.06-.101-.281-.523-.652-.575-.504-1.55-1.073-2.971-1.6C36.68 12.197 32.614 11.5 28 11.5s-8.681.699-11.504 1.747c-1.42.528-2.396 1.097-2.971 1.601zm29.475.66v.007l.001.002v-.008zm0-.017l.001-.008v.008zm-30 0a.031.031 0 01-.001-.008v.008zM28 6.5c-5.05 0-9.734.756-13.245 2.06-1.746.649-3.333 1.48-4.53 2.531C9.035 12.138 8 13.621 8 15.5v15.465L7.965 31l.035.035V43.11c0 .867.322 1.721.934 2.38.99 1.063 2.587 2.63 5.495 3.89C17.292 50.62 21.277 51.5 27 51.5h2.5v-5H27c-5.22 0-8.495-.804-10.583-1.709-1.694-.733-2.705-1.574-3.417-2.286v-7.504c.934.475 1.994.923 3.154 1.32 2.964 1.015 6.774 1.767 11.258 1.767 4.74 0 10.409-.446 13.933-1.97l2.295-.991-1.983-4.59-2.295.992c-2.49 1.075-7.227 1.56-11.95 1.56-3.928 0-7.191-.66-9.639-1.498-2.515-.862-3.996-1.85-4.505-2.359L13 28.964v-7.27c.56.272 1.148.52 1.755.746C18.266 23.744 22.95 24.5 28 24.5c5.05 0 9.734-.756 13.245-2.06A19.838 19.838 0 0043 21.695V28h5V16h-.025c.017-.163.025-.33.025-.5 0-1.879-1.034-3.362-2.226-4.409-1.196-1.05-2.783-1.882-4.53-2.53C37.735 7.255 33.052 6.5 28 6.5zM50.597 41.138l-1.048 2.247a8.429 8.429 0 11-4.531-2.114l5.171-11.09 4.532 2.114-2.011 4.312 4.629 2.22-2.163 4.508-4.58-2.197zm-5.268 5.38a3.429 3.429 0 10-2.898 6.215 3.429 3.429 0 002.898-6.215z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconUnlockCurrency64.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconUnlockCurrency64;

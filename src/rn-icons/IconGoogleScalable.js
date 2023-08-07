import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconGoogleScalable = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <Svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.59 15.654l2.925-2.237a5.162 5.162 0 01-.258-1.616c0-.566.09-1.11.258-1.617L4.59 7.947a8.706 8.706 0 00-.89 3.854c0 1.386.32 2.693.89 3.853z"
          fill="#FBBC05"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.516 10.184a5.129 5.129 0 014.881-3.523c1.226 0 2.333.435 3.202 1.147l2.53-2.53c-1.541-1.345-3.518-2.175-5.732-2.175a8.671 8.671 0 00-7.806 4.844l2.925 2.237z"
          fill="#EA4335"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.59 15.651a8.671 8.671 0 007.808 4.846c4.349 0 8.302-3.163 8.302-8.697 0-.514-.08-1.068-.198-1.582h-8.104v3.36h4.665c-.435 2.136-2.253 3.361-4.665 3.361a5.129 5.129 0 01-4.883-3.53L4.59 15.651z"
          fill="#34A853"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.398 10.22h8.104c.119.513.198 1.067.198 1.58 0 2.835-1.037 5.048-2.633 6.532l-2.777-2.15c.908-.573 1.54-1.457 1.773-2.602h-4.665v-3.36z"
          fill="#4285F4"
        />
      </Svg>
    </Svg>
  );
};

IconGoogleScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconGoogleScalable;

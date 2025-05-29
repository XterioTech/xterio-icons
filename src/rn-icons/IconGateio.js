import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconGateio = props => {
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
          d="M12 17.5a5.5 5.5 0 110-11V2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10 5.522 0 10-4.477 10-10h-4.5a5.5 5.5 0 01-5.5 5.5z"
          fill="#2354E6"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 13h5.5V7.5H12V13z"
          fill="#17E6A1"
        />
      </Svg>
    </Svg>
  );
};

IconGateio.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconGateio;

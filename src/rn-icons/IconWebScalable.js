import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconWebScalable = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.163 15.844c-.234 1.274-.577 2.4-.993 3.313-.86 1.89-1.74 2.343-2.17 2.343-.43 0-1.31-.453-2.17-2.343-.416-.914-.76-2.039-.993-3.313a52.918 52.918 0 016.326 0zm1.504.112c-.436 2.484-1.269 4.533-2.328 5.769a10.02 10.02 0 006.575-5.189c-.442-.085-1.039-.19-1.77-.294-.706-.1-1.538-.202-2.477-.286zm4.836-.833a38.242 38.242 0 00-2.147-.366 48.784 48.784 0 00-2.482-.288c.082-.794.126-1.62.126-2.47 0-.848-.044-1.674-.126-2.468.937-.085 1.77-.187 2.482-.288.89-.128 1.591-.255 2.072-.351l.075-.015A9.99 9.99 0 0122 12a9.99 9.99 0 01-.497 3.123zm-6.126-.769a54.442 54.442 0 00-6.754 0c-.08-.75-.123-1.538-.123-2.354 0-.816.043-1.604.123-2.355a54.415 54.415 0 006.754 0c.08.75.123 1.539.123 2.355 0 .816-.043 1.604-.123 2.354zm-8.25.115A23.854 23.854 0 017 11.999c0-.848.044-1.674.126-2.468a48.868 48.868 0 01-2.482-.288 38.18 38.18 0 01-2.072-.351l-.075-.015A9.991 9.991 0 002 12c0 1.09.175 2.14.497 3.123l.075-.015a38.233 38.233 0 012.072-.35 48.787 48.787 0 012.482-.29zm-4.041 2.067a10.02 10.02 0 006.575 5.189c-1.06-1.236-1.892-3.285-2.328-5.769-.94.084-1.77.185-2.477.286-.731.105-1.328.209-1.77.294zM12 8.25c-1.131 0-2.19-.036-3.163-.094.234-1.275.577-2.4.993-3.314C10.69 2.952 11.57 2.5 12 2.5c.43 0 1.31.453 2.17 2.342.416.915.76 2.04.993 3.314-.973.058-2.032.094-3.163.094zm7.144-.492a37.808 37.808 0 001.77-.294 10.02 10.02 0 00-6.575-5.19c1.06 1.237 1.893 3.285 2.328 5.77.94-.084 1.77-.186 2.477-.286zm-14.288 0c.706.1 1.538.202 2.477.286.436-2.484 1.269-4.533 2.328-5.77a10.02 10.02 0 00-6.575 5.19c.442.085 1.039.19 1.77.294z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconWebScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWebScalable;

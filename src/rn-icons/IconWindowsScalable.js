import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconWindowsScalable = props => {
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
        d="M19.2 11.64V4.8c-2.633.36-5.243.72-7.875 1.148v5.76l7.875-.068zM4.8 6.915v4.837c1.935 0 3.915-.022 5.85-.022V6.105c-1.935.27-3.915.518-5.85.81zm0 5.4v4.838c1.935.27 3.915.517 5.85.787v-5.603c-1.935 0-3.915-.022-5.85-.022zm6.57.113c.022 1.89.022 3.78.022 5.67 2.61.36 5.198.72 7.808 1.102v-6.772h-7.83z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconWindowsScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWindowsScalable;

import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconCongratulate12 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '12'}
      height={size || '12'}
      viewBox="0 0 12 12"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.254 4.303l2.121-2.122-.707-.707-2.121 2.122.707.707zm-4.847-.604c.155.051.362.149.615.3.596.358 1.35.958 2.111 1.718.761.761 1.36 1.516 1.718 2.111.152.253.25.46.301.615a3.283 3.283 0 01-.615-.3c-.596-.358-1.35-.958-2.11-1.719-.762-.76-1.361-1.515-1.719-2.11a3.284 3.284 0 01-.3-.615zm1.13-.557c.684.41 1.502 1.067 2.303 1.868.802.802 1.458 1.62 1.868 2.304.204.338.362.669.437.963.066.257.117.676-.183.976a.83.83 0 01-.607.234L.117 11.733l2.247-8.238a.83.83 0 01.234-.606c.3-.3.718-.25.975-.184.295.076.625.234.964.437zm.182 3.99c.722.721 1.457 1.325 2.096 1.738l-5.273 1.438L2.98 5.036c.413.638 1.017 1.374 1.74 2.096zm6.01-1.269H9.315v-1h1.414v1zM5.986 2.535V1.12h1v1.414h-1z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconCongratulate12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconCongratulate12;

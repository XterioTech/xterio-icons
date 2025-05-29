import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconCalendar = props => {
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
        d="M9 1v2h6V1h2v2h4a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h4V1h2zm11 10H4v8h16v-8zM8 14v2H6v-2h2zm10 0v2h-8v-2h8zM7 5H4v4h16V5h-3v2h-2V5H9v2H7V5z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconCalendar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconCalendar;

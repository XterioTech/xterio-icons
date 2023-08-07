import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconLink24 = props => {
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
        d="M8.858 9v4.286h2V9.414l3.135-3.135a2.636 2.636 0 113.729 3.728l-.857.857 1.414 1.415.857-.858a4.636 4.636 0 10-6.557-6.557L9.15 8.293A1 1 0 008.858 9zm6.284 6v-4.286h-2v3.872l-3.135 3.136a2.636 2.636 0 11-3.729-3.729l.857-.857-1.414-1.414-.857.857a4.637 4.637 0 006.557 6.557l3.429-3.429a1 1 0 00.292-.707z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconLink24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconLink24;

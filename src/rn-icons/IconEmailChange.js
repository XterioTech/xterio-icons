import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconEmailChange = props => {
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
        d="M2 4a1 1 0 011-1h11v2H4.505L12 11.662l4.398-3.91 1.329 1.495L12 14.338 4 7.227V19h16v-8h2v9a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM17.757 3l-1.414 1.414 4.243 4.243H22V7.243L17.757 3z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconEmailChange.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconEmailChange;

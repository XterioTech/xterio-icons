import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconGameNormal24 = props => {
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
        d="M19.414 4H4.586L2.03 6.554.921 21h6.614l2-3h4.93l2 3h6.615L21.969 6.554 19.414 4zM3.97 7.446L5.414 6h13.172l1.445 1.446.89 11.554h-3.386l-2-3h-7.07l-2 3H3.08l.889-11.554zM17 11.5a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-11.5 1H6v-2h1.5V9h2v1.5H11v2H9.5V14h-2v-1.5z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconGameNormal24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconGameNormal24;

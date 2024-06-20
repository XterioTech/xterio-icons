import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconOkxScalable = props => {
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
          d="M18.65 2.5H5.35A2.85 2.85 0 002.5 5.35v13.3a2.85 2.85 0 002.85 2.85h13.3a2.85 2.85 0 002.85-2.85V5.35a2.85 2.85 0 00-2.85-2.85z"
          fill="#000"
        />
        <Path
          d="M13.619 10.214h-3.07a.237.237 0 00-.236.235v3.07c0 .13.106.236.235.236h3.07c.13 0 .236-.106.236-.235v-3.07a.237.237 0 00-.235-.236zM10.07 6.672H6.998a.237.237 0 00-.236.236v3.07c0 .13.107.236.236.236h3.07c.13 0 .236-.107.236-.236v-3.07a.237.237 0 00-.236-.236zM17.168 6.672h-3.07a.237.237 0 00-.236.236v3.07c0 .13.107.236.236.236h3.07c.13 0 .236-.107.236-.236v-3.07a.237.237 0 00-.236-.236zM10.07 13.763H6.998a.237.237 0 00-.236.236v3.07c0 .13.107.236.236.236h3.07c.13 0 .236-.107.236-.236v-3.07a.237.237 0 00-.236-.236zM17.168 13.763h-3.07a.237.237 0 00-.236.236v3.07c0 .13.107.236.236.236h3.07c.13 0 .236-.107.236-.236V14a.237.237 0 00-.236-.236z"
          fill="#fff"
        />
      </Svg>
    </Svg>
  );
};

IconOkxScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconOkxScalable;

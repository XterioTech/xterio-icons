import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconColorfulIconListing = props => {
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
        d="M19.295 9.565a2.65 2.65 0 01-4.77 2.266l-.124-.213-.178.286a2.641 2.641 0 01-4.479 0l-.18-.286-.124.213a2.65 2.65 0 01-2.288 1.315l-.006-.002v4.329h5.346V19H4.855v-1.527h.764v-4.815a2.648 2.648 0 01-.948-3.093L6.383 5h11.2l1.712 4.565zm-.082 6.015l-3.09 3.09L14 16.743l1.027-1.13 1.045.95 2.06-2.062 1.08 1.08zM6.102 10.102a1.122 1.122 0 002.02.96l.124-.213L9.52 8.664l1.52 2.43a1.114 1.114 0 001.888 0l.178-.285 1.34-2.145 1.275 2.185.124.213a1.123 1.123 0 002.02-.96l-1.34-3.575H7.44l-1.34 3.575z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconColorfulIconListing.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconColorfulIconListing;

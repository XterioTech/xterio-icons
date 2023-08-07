import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconCongratulate80 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '80'}
      height={size || '80'}
      viewBox="0 0 80 80"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.91 19.142c.696 4.005.278 7.813-.354 10.19l-4.832-1.285c.466-1.754.82-4.829.26-8.048-.556-3.189-1.969-6.34-4.86-8.604l3.084-3.936c4.125 3.232 5.999 7.646 6.701 11.683zm15.88-9.32l-.272.581a1.451 1.451 0 01-1.315.838H48.19a3.896 3.896 0 00-1.978 7.252l4.95 2.918.002.002h.001s.002.002.002.005l.001.002v.006l-.002.003-.002.002h-.001l-.002.002a.018.018 0 01-.004 0l-.001.001-.004-.001-3.846-1.446a3.934 3.934 0 00-4.833 5.574l.99 1.807a.602.602 0 01-.867.786l-.933-.64-2.264 3.297.933.64a4.602 4.602 0 006.639-6.007l-.905-1.65 3.678 1.383a4.012 4.012 0 003.45-7.211l-4.62-2.725h.63a5.451 5.451 0 004.94-3.148l.27-.58-3.625-1.691zm3.3 27.55c1.005-1.532 3.152-4.05 6.177-6.299 3.014-2.241 6.77-4.117 11.01-4.588l-.553-4.97c-5.36.596-9.938 2.942-13.44 5.545-3.493 2.597-6.046 5.544-7.374 7.568l4.18 2.744zm-28.007-11.1c.043-.15.433-.928 2.147-1.623.084-1.29.048-2.782-.217-4.307a15.838 15.838 0 00-.17-.839c-3.437 1.018-5.84 2.855-6.567 5.391-.261.913-.291 1.863-.111 2.831l-.03.003 4.921 45.27c.24 2.199 2.94 3.114 4.466 1.515l32.449-33.995-.104-.1c.971-.855 1.654-1.869 1.987-3.028.556-1.94.064-4.052-1.26-6.14-.745.445-1.457.925-2.134 1.428a27.524 27.524 0 00-1.902 1.551c.586 1.049.525 1.659.49 1.783-.057.196-.706 1.464-4.125 2.219-.057.082-.11.162-.16.238l-.237-.155a19.4 19.4 0 01-.18.034c-3.595.67-8.594.44-14.027-1.118-5.432-1.558-9.794-4.01-12.488-6.485-2.94-2.7-2.808-4.265-2.748-4.473zm13.413-2.358a34.712 34.712 0 00-2.227-.243 27.044 27.044 0 00-.419-5.037c1.452.078 2.959.247 4.502.51a6.431 6.431 0 00-1.857 4.77zm16.996 1.247c.071-.101.14-.205.205-.312l.123.078-.328.234zm-3.777 3.137a31.914 31.914 0 00-.76-.412 6.532 6.532 0 001.698-.449c-.323.287-.636.574-.938.861zM39.941 42.036c4.677 1.341 9.221 1.847 13.13 1.61l-6.967 7.301a26.368 26.368 0 01-17.95-4.925l-1.116-10.257c3.299 2.556 7.766 4.798 12.903 6.271zm-11.1 10.306l1.628 14.984 10.837-11.353a31.375 31.375 0 01-12.466-3.631z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconCongratulate80.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconCongratulate80;

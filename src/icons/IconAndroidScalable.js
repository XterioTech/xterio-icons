import React from 'react';
import PropTypes from 'prop-types';

const IconAndroidScalable = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M7.152 9.031h9.935v7.208c0 .66-.532 1.19-1.178 1.19h-.815v2.457a1.114 1.114 0 01-2.23 0V17.43h-1.49v2.456c0 .616-.5 1.114-1.117 1.114a1.111 1.111 0 01-1.104-1.114l-.01-2.456h-.8c-.66 0-1.19-.53-1.19-1.191V9.03zm-1.537-.205c-.616 0-1.115.499-1.115 1.103v4.655c0 .617.499 1.114 1.115 1.114s1.103-.498 1.103-1.114V9.929c0-.604-.495-1.103-1.103-1.103zm11.504-.184H7.109c0-1.72 1.029-3.215 2.555-3.993l-.77-1.417a.158.158 0 01.054-.217c.075-.033.174-.011.217.066l.778 1.428a5.354 5.354 0 012.176-.455 5.37 5.37 0 012.176.454l.778-1.428c.043-.076.142-.098.217-.066.076.044.098.141.054.217l-.77 1.417c1.517.78 2.545 2.273 2.545 3.994zm-6.862-2.229a.422.422 0 00-.42-.422.42.42 0 00-.413.422.42.42 0 00.412.421.42.42 0 00.42-.421zm4.557 0a.42.42 0 00-.412-.422.421.421 0 000 .843.418.418 0 00.412-.421zm3.81 2.413a1.1 1.1 0 00-1.104 1.103v4.655a1.109 1.109 0 102.218 0V9.929a1.105 1.105 0 00-1.115-1.103z"
        fill="currentColor"
      />
    </svg>
  );
};

IconAndroidScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconAndroidScalable;

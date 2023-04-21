const getAttrs = (style) => {
  const baseAttrs = {
    xmlns: "http://www.w3.org/2000/svg",
    // width: 'size',
    // height: 'size',
    // viewBox: '0 0 24 24',
  };
  const fillAttrs = {
    // color: 'color',
    otherProps: "...otherProps",
  };
  //   const strokeAttrs = {
  //     fill: 'none',
  //     stroke: 'color',
  //     strokeWidth: 2,
  //     strokeLinecap: 'round',
  //     strokeLinejoin: 'round',
  //     otherProps: '...otherProps'
  //   }
  return Object.assign(
    {},
    baseAttrs,
    style === "fill" ? fillAttrs : strokeAttrs
  );
};

const getElementCode = (
  ComponentName,
  attrs,
  svgCode,
  width,
  height,
  originFill
) => `
  import React from 'react';
  import PropTypes from 'prop-types';

  ${originFill.length ? `const originFill = ${JSON.stringify(originFill)}` : ""}
    
  const ${ComponentName} = (props) => {
    const { color, size, ...otherProps } = props;
   
    return (
      <svg style={{color}} width={size || '${width}'} height={size || '${height}'} viewBox='0 0 ${width} ${height}' ${attrs}>
        ${svgCode}
      </svg>
    )
  };

  ${ComponentName}.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }

  export default ${ComponentName}
`;

module.exports = { getAttrs, getElementCode };

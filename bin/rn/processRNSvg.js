const Svgo = require("svgo");
const cheerio = require("cheerio");


/**
 * Convert string to CamelCase.
 * @param {string} str - A string.
 * @returns {string}
 */
function CamelCase(str) {
  return str.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase());
}
// url(#paint0_linear_222_908)
/**
 * Optimize SVG with `svgo`.
 * @param {string} svg - An SVG string.
 * @returns {Promise<string>}
 */
function optimize(svg, type) {
  const originFill = [];
  const tag = ['Svg']

  const svgo = new Svgo({
    plugins: [
      //   { convertShapeToPath: false },
      //   { mergePaths: false },
      //   { removeAttrs: type === 'normal' ? { attrs: 'fill' } : {} },
      //   { removeTitle: true },
      //   { convertStyleToAttrs : true },
      {
        addFillNoneCss: {
          type: "perItem",
          fn: (item, params) => {
            item.elem = CamelCase(item.elem)
            if(!tag.includes(item.elem)) {
                tag.push(item.elem)
            }
            if (type !== "normal") {
              return;
            }
            if (!Array.isArray(params.attrs)) {
              params.attrs = [params.attrs];
            }
            if (item.isElem()) {
              item.eachAttr((attr) => {
                if(`${0}${attr.value}` ===  `${Number(attr.value)}`) {
                    attr.value = `${Number(attr.value)}`
                }
                if (item.elem === "Svg") {
                  item.removeAttr(attr.name);
                }
                if (["fill"].includes(attr.name)) {
                  if (
                    ["#FEFEFE"].includes(attr.value.toUpperCase()) &&
                    ["Path", "G"].includes(item.elem)
                  ) {
                    attr.value = "currentColor";
                  }
                  if (
                    ["Path", "G"].includes(item.elem) &&
                    attr.value.includes("url(")
                  ) {
                    originFill.push(attr.value);
                    attr.value = `{{color || originFill[${originFill.length -
                      1}]}}`;
                  }
                }
              });
            }
          },
        },
      },
      
    ],
  });

  return new Promise((resolve) => {
    svgo.optimize(svg).then(({ data }) => {
      resolve({ data, originFill, tag });
    });
  });
}

/**
 * remove SVG element.
 * @param {string} svg - An SVG string.
 * @returns {string}
 */
function removeSVGElement(svg) {
  const $ = cheerio.load(svg);
  return $("body")
    .children()
    .html();
}

/**
 * Process SVG string.
 * @param {string} svg - An SVG string.
 * @param {Promise<string>}
 */
async function processSvg(svg, type, size) {
  const { data, originFill, tag } = await optimize(svg, type);
  // remove semicolon inserted by prettier
  // because prettier thinks it's formatting JSX not HTML
  // .then(svg => svg.replace(/;/g, ''))
  // .then(removeSVGElement)
  //   .then(svg => svg.replace(/([a-z]+)-([a-z]+)=/g, (_, a, b) => `${a}${CamelCase(b)}=`))
  const orCode =
    type === "normal" ? data.replace("<Svg>", "").replace("</Svg>", "") : data;

  return {
    originFill,
    tag,
    svgCode: orCode
      .replaceAll('style="mask-type:alpha"', `style={{maskType: 'alpha'}}`)
      .replaceAll(
        'style="mask-type:luminance"',
        `style={{maskType: 'luminance'}}`
      )
      .replaceAll(`"{{`, "{")
      .replaceAll('}}"', "}")
      .replace(/([a-z]+)-([a-z]+)=/g, (_, a, b) => `${a}${CamelCase(b)}=`)
      .replace(/;/g, ""),
  };
}

module.exports = processSvg;

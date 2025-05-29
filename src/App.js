import React from "react";
import styled from "styled-components";
import * as icons from "./icons";
import Header from "./components/Header";
import IconWrapper from "./components/IconWrapper";
import { ComponentNameToWidth } from "./config";

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: stretch;
  align-items: stretch;
  margin: 0;
  padding: 0 0 50px 0;
  list-style: none;
  background: rgba(0,0,0,0.4);
`;

const config = [
  // {
  //   size: "12 * 12",
  //   icons: Object.keys(icons).filter((k) => k.endsWith("12")),
  // },
  // {
  //   size: "16 * 16",
  //   icons: Object.keys(icons).filter((k) => k.endsWith("16")),
  // },
  // {
  //   size: "24 * 24",
  //   icons: Object.keys(icons).filter((k) => k.endsWith("24")),
  // },
  // {
  //   size: "32 * 32",
  //   icons: Object.keys(icons).filter((k) => k.endsWith("32")),
  // },
  // {
  //   size: "40 * 40",
  //   icons: Object.keys(icons).filter((k) => k.endsWith("40")),
  // },
  // {
  //   size: "64 * 64",
  //   icons: Object.keys(icons).filter((k) => k.endsWith("64")),
  // },
  // {
  //   size: "72 * 72",
  //   icons: Object.keys(icons).filter((k) => k.endsWith("72")),
  // },
  // {
  //   size: "80 * 80",
  //   icons: Object.keys(icons).filter((k) => k.endsWith("80")),
  // },
  // {
  //   size: "120 * 120",
  //   icons: Object.keys(icons).filter((k) => k.endsWith("120")),
  // },
  {
    size: "Scalable",
    icons: Object.keys(icons)
      // .filter((k) => k.endsWith("Scalable"))
      .sort((a, b) => {
        return ComponentNameToWidth[a] - ComponentNameToWidth[b];
      }),
  },
];

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "#fefefe" };
  }
  
  render() {
    const { color = "#fefefe" } = this.state;
    return (
      <div>
        <Header />
        <div
          style={{
            textAlign: "center",
            display: "flex",
            padding: 10,
            justifyItems: "center",
            justifyContent: "center",
            background: 'rgba(0,0,0,0.4)'
          }}
        >
          <span>换色：</span>
          <span
            onClick={() => this.setState({ color: "" })}
          >不传颜色</span>
          <span
            onClick={() => this.setState({ color: "#fefefe" })}
            style={{
              display: "inline-block",
              width: 20,
              height: 20,
              background: "#fefefe",
            }}
          />
          <span
            onClick={() => this.setState({ color: "#e6b1f7" })}
            style={{
              display: "inline-block",
              width: 20,
              height: 20,
              background: "#e6b1f7",
            }}
          />
          <span
            onClick={() => this.setState({ color: "#7dd5f9" })}
            style={{
              display: "inline-block",
              width: 20,
              height: 20,
              background: "#7dd5f9",
            }}
          />
          <span
            onClick={() => this.setState({ color: "#0a1161" })}
            style={{
              display: "inline-block",
              width: 20,
              height: 20,
              background: "#0a1161",
            }}
          />
        </div>
        {config.map(({ size, icons: _icons }) => (
          <div>
            <p>{size}</p>
            <div >
              <Container>
                {_icons.map((key, index) => {
                  const Icon = icons[key];
                  return (
                    <li
                      onDoubleClick={() => {
                        alert(`${key} copied`);
                        handleCopyIcon(`<${key} color="" size="" />`);
                      }}
                      key={index}
                    >
                      <IconWrapper>
                        <Icon color={color} />
                        <span style={{ color: "#fefefe" }}>{key}</span>
                      </IconWrapper>
                    </li>
                  );
                })}
              </Container>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

// copy icon
function handleCopyIcon(str) {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

export default List;

import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import rangeParser from "parse-numeric-range";
import CopyButton from "./copy-button";
import theme from "prism-react-renderer/themes/nightOwl";

const calculateLinesToHighlight = (raw) => {
  const lineNumbers = rangeParser(raw);
  // console.log(raw);
  if (lineNumbers) {
    return index => lineNumbers.includes(index + 1);
  } else {
    return () => false;
  }
};

const Code = ( {...props} ) => {
  
  console.log({...props})

  const className = props.children.props.className || "";
  const code = props.children.props.children.trim();
  const language = className.replace(/language-/, "");
  const file = props.children.props.file;
  const highlights = calculateLinesToHighlight(
    props.children.props.highlights || ""
  );
  const numberLines = props.children.props.numberLines || "";

  return (
    <div
      style={{
        background: "#011627",
        borderRadius: "0.5rem",
        marginTop: "2rem",
        marginBottom: "2rem",
        paddingLeft: "1.5rem",
      }}
    >
      <div style={{ display: "flex", position: "relative" }}>
        <div
          style={{
            background: "#ffffff",
            marginRight: "1rem",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            textTransform: "uppercase",
            borderBottomLeftRadius: "0.5rem",
            borderBottomRightRadius: "0.5rem",
            fontFamily: "Montserrat",
            fontWeight: "bold",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >{`${language}`}</div>
        <div
          style={{
            color: "#9d9d9d",
            fontFamily: "Montserrat",
            fontStyle: "italic",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {file && `${file}`}
        </div>        
        <div style={{ flexGrow: "1" }}></div>
        {/* SWITCH - COPY BUTTON */}
        <CopyButton code={code} />
      </div>
      <div
        style={{
          overflow: "auto",
          background: "#011627",
          borderRadius: "0.5rem",
        }}
      >
        <Highlight
          {...defaultProps}
          code={code}
          language={language}
          theme={theme}
          numberLines
          highlights={highlights}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{
                ...style,
                backgroundColor: "transparent",
                float: "left",
                minWidth: "100%",
              }}
            >
              {tokens.map((line, i) => (
                <div
                  {...getLineProps({ line, key: i })}
                  style={{
                    background: highlights(i) ? "#00f5c426" : "transparent",
                    display: "block",
                  }}
                >
                  {/* SWITCH - LINE NUMBERS */}
              <span className="numberLine">{ numberLines ? i + 1 : i + 1 }</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default Code;
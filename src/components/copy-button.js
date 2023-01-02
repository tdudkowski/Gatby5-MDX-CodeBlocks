import React from "react"

const copyToClipboard = str => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(str).then(
        function () {
          console.log("Copying to clipboard was successful!");
        },
        function (err) {
          console.error("Could not copy text: ", err);
        }
      );
    } else if (window.clipboardData) {
      // Internet Explorer
      window.clipboardData.setData("Text", str);
    }
  };

const CopyButton = ({code}) => {
    const [isCopied, setIsCopied] = React.useState(false);  

    return (
        <button
        onClick={() => {
          copyToClipboard(code);
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 1000);
        }}
        style={{
          marginRight: "1.5rem",
          marginTop: "0.5rem",
          padding: "8px 12px",
          background: "#00f5c426",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          color: "#E2E8F0",
          fontSize: "14px",
          fontFamily: "sans-serif",
          lineHeight: "1",
        }}
      >
        {isCopied ? "🎉 Copied!" : "Copy"}
      </button>
    )
}

export default CopyButton
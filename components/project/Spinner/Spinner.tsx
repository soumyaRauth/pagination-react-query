const Spinner = () => (
  <div
    style={{
      position: "fixed", // Fixed to stay in place
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent white background
      zIndex: "9999", // Make sure the spinner is on top of everything else
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      Loading...
    </div>
  </div>
);

export default Spinner;

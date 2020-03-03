import React from "React";
import Logo from "./assets/logo.png";

function App(props) {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        height: window.innerHeight,
        background: "#D5EFEA"
      }}
    >
      <div>
        <img src={Logo} width="150px" />
      </div>
      <div>
        <h3>React Quick Start</h3>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import { css } from "@emotion/react";
import {PulseLoader} from "react-spinners/";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
`;

function App() {
  return (
    <div className="sweet-loading text-center">
      <PulseLoader color={"#ffffff"} loading={true} css={override} size={15} />
    </div>
  );
}

export default App;
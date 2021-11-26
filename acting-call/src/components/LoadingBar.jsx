import { css } from "@emotion/react";
import {PulseLoader} from "react-spinners/";

const style = css`
  display: block;
  margin: 0 auto;
`;

function App() {
  return (
    <div className="sweet-loading text-center">
      <PulseLoader color={"#ffffff"} loading={true} css={style} size={15} />
    </div>
  );
}

export default App;
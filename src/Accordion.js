import "./accordion.css";
import { useState } from "react";

export default function Accordion() {
  const [openAcc, setOpenAcc] = useState(false);
  return (
    <div className="App">
      <h1>Accordion</h1>
      <button
        style={{ display: "flex", justifyContent: "space-between" }}
        class="accordion"
        onClick={() => setOpenAcc(!openAcc)}
      >
        Section 1<span>{openAcc ? "-" : "+"}</span>
      </button>
      <div className={openAcc ? "panel active-acc" : "panel"}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert"

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Chinese",
    value: "zh",
  }
];

const Translate = () => {
  const [selected, setSelected] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <div>
        <Convert language={selected} text={text} />
      </div>
    </div>
  );
};

export default Translate;

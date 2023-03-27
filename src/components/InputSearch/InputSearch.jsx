import React from "react";
import "./inputSearch.scss";

const InputSearch = (props) => {
  return (
    <>
      <input
        type="text"
        className="input-body"
        value={props.value}
        placeholder="Начните вводить текст для поиска (не менее трех символов)"
        onChange={props.onChange}
      />
    </>
  );
};

export default InputSearch;

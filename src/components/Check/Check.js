import React from "react";

function Check({ isChecked, handlerCheckBox }) {
  return (
    <div className="checkbox">
    <label className="checkbox__label">
    <span className={`checkbox_heading ${!isChecked ? 'checkbox_heading-light' : ''}`}>Light</span>
      <input type="checkbox" onChange={handlerCheckBox} checked={isChecked}/>
      <span className="checkbox_switch"></span>
      <span className={`checkbox_heading ${!isChecked ? 'checkbox_heading-light' : ''}`}>Dark</span>
    </label>
    </div>
  );
}
export default Check;

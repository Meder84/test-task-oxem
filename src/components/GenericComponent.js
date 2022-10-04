import React from "react";

function GenericComponent ({
  subTitle, onChange, textSpan, value
}) {

  const handleChange = (evt) => {
    const value = evt.target.value
    onChange(value)
  }

  return (
    <div className="generic-component">
      <h2 className="subTitle">{subTitle}</h2>
      <div className="generic-component__container">
        <input
          className="generic-component__input"
          value={value}
          type="number"
          onChange={handleChange}
        />
        <span className="component__span">{textSpan}</span>
      </div>
    </div>
  );
}

export default GenericComponent;

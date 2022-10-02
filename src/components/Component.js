import React, { Children } from "react";
import SliderComponent from "./SliderComponent";

function Component ({
  subTitle, value, defaultValue, handleChange, min, max, step,
  componentContainer, sliderComponentInput, Children, childrenClass
}) {

  return (
    <div className="component">
      <h2 className="subTitle">{subTitle}</h2>
      <div className={`component__container ${componentContainer}`}>
        <div className="component__container-child">
          <input
            className="component__input"
            value={value}
            type="number"
            onChange={handleChange}
          />
          <span className="component__span">₽</span>
        </div>
        <div className={`component__children ${childrenClass}`}>{Children}</div>
      </div>
      <SliderComponent
        value={value}
        handleChange={handleChange}
        min={min}
        max={max}
        step={step}
        sliderComponentInput={sliderComponentInput}
      />
    </div>
  );
}

export default Component;

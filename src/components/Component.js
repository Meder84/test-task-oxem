import React from "react";
import SliderComponent from "./SliderComponent";

function Component ({
  subTitle, value, handleChange, min, max, step, textSpan,
  componentContainer, sliderComponentInput, children, componentContainerChild
}) {

  return (
    <div className="component">
      <h2 className="subTitle">{subTitle}</h2>
      <div className={`component__container ${componentContainer}`}>
        <div className={`component__container-child ${componentContainerChild}`}>
          <input
            className="component__input"
            value={value}
            type="number"
            onChange={handleChange}
          />
          <span className="component__span">{textSpan}</span>
        </div>
        {children}
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

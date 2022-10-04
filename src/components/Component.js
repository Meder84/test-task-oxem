import React from "react";
import SliderComponent from "./SliderComponent";

function Component ({
  subTitle, value, onChangeSlider, min, max, step, textSpan, onChangeComponent,
  componentContainer, sliderComponentInput, children, componentContainerChild
}) {

  const handleChange = (evt) => {
    const value = evt.target.value
    onChangeComponent(value)
  }

  return (
    <div className="component">
      <h2 className="subTitle">{subTitle}</h2>
      <div className={`component__container ${componentContainer}`}>
        <div className={`component__container-child ${componentContainerChild}`}>
          <input
            className="component__input opacity"
            value={value}
            type="number"
            onChange={handleChange}
          />
          <span className="component__span">{textSpan}</span>
        </div>
        {children}
      </div>
      <SliderComponent
        onChangeSlider={onChangeSlider}
        min={min}
        max={max}
        step={step}
        sliderComponentInput={sliderComponentInput}
      />
    </div>
  );
}

export default Component;

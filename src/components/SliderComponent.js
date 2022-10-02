import React from "react";

function SliderComponent({value, handleChange, min, max, step, sliderComponentInput}) {

  return (
    <div className="slider-component">
      <input
        className={`slider-component__input ${sliderComponentInput}`}
        type="range"
        defaultValue={value}
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
      />
    </div>
  )
}

export default SliderComponent;

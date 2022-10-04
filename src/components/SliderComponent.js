import React from "react";

function SliderComponent({onChangeSlider, min, max, step, sliderComponentInput}) {

  const handleChange = (evt) => {
    onChangeSlider(evt.target.value)
  }

  return (
    <div className="slider-component">
      <input
        className={`slider-component__input ${sliderComponentInput}`}
        type="range"
        // value={value}
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
      />
    </div>
  )
}

export default SliderComponent;

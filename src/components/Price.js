import React, { useState } from "react";
import Component from "./Component";
import SliderComponent from "./SliderComponent";

function Price () {
  const [value, setValue] = useState(3300000);
  const min = 1000000;
  const max = 6000000;

  const handleChange = (evt) => {
    const value = Math.max(min, Math.min(max, Number(evt.target.value)));
    setValue(value)
  }

  return (
    <div className="price">
      <Component
        subTitle="Стоимость автомобиля"
        value={value}
        handleChange={handleChange}
        min={1000000}
        max={6000000}
        step={1}
      />
    </div>
  );
}

export default Price;
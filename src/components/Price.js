import React, { useState } from "react";
import Component from "./Component";

function Price ({onchange}) {
  const [value, setValue] = useState(3300000);
  const min = 1000000;
  const max = 6000000;

  const handleChange = (evt) => {
    const value = Math.max(min, Math.min(max, Number(evt)));
    onchange(value)
    setValue(value)
  }

  return (
    <div className="price">
      <Component
        subTitle="Стоимость автомобиля"
        value={value}
        onChangeComponent={handleChange}
        onChangeSlider={handleChange}
        min={1000000}
        max={6000000}
        step={1}
        textSpan='₽'
      />
    </div>
  );
}

export default Price;

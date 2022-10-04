import React, { useState } from "react";
import Component from "./Component";

function Price ({onchange}) {
  const [value, setValue] = useState(100);
  const min = 10;
  const max = 100;

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
        min={10}
        max={100}
        step={1}
        textSpan='₽'
      />
    </div>
  );
}

export default Price;

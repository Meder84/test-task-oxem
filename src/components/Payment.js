import { useState } from "react";
import Component from "./Component";

function Payment () {
  const [value, setValue] = useState(420000);
  const min = 1;
  const max = 4333293;

  const handleChange = (evt) => {

    const value = Math.max(min, Math.min(max, Number(evt.target.value)));
    setValue(value)
  }

  return (
    <div className="payment">
      <Component
        subTitle="Первоначальный взнос"
        value={value}
        handleChange={handleChange}
        min={0}
        max={4333293}
        step={1}
        componentContainer="payment__container"
        sliderComponentInput="payment__input-slider"
      >
      </Component>
        {/* <input type="number" value={state} min={0} max={100} onChange={handleChangeState}/> */}
    </div>
  );
}

export default Payment;

import { useState } from "react";
import Component from "./Component";
import { useContext } from 'react';
import { Context } from "../contexts/context";

function Initial ({onChange}) {
  const [value, setValue] = useState(420000);
  const [percent, setPersent] = useState(13);
  // const contextValue = useContext(Context);

  const min = 323076;
  const max = 3230759;

  const handleChange = (evt) => {

    const value = Math.max(min, Math.min(max, Number(evt.target.value)));
    const percent = Math.round(value * 100 / max);
    const onChange = value

    // contextValue.setValue(value);
    setValue(value)
    setPersent(percent)
  }

  return (
    <div className="initial">
      <Component
        subTitle="Первоначальный взнос"
        value={value}
        handleChange={handleChange}
        min={193845}
        max={1938453}
        step={1}
        componentContainer="initial__container"
        componentContainerChild="initial__container-child"
        sliderComponentInput="initial__input-slider"
        textSpan='₽'
      >
        <span className="initial__span">
          <input
            type="number"
            className="initial__input-percent"
            min={0}
            max={100}
            step={1}
            value={percent}
            onChange={handleChange}
          />
          %
        </span>
      </Component>
    </div>
  );
}

export default Initial;

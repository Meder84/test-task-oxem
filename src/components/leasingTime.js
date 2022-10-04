import React, { useState } from "react";
import Component from "./Component";

function LeasingTime ({onChange}) {
  const [value, setValue] = useState(60);
  const min = 1;
  const max = 60;

  const handleChange = (evt) => {
    const LeasingTimevalue = Math.max(min, Math.min(max, Number(evt)));
    onChange(LeasingTimevalue)
    setValue(LeasingTimevalue)
  }

  return (
    <div className="leasingTime">
      <Component
        subTitle="Срок лизинга"
        value={value}
        onChangeComponent={handleChange}
        onChangeSlider={handleChange}
        min={1}
        max={60}
        step={1}
        textSpan='мес.'
      />
    </div>
  );
}

export default LeasingTime;

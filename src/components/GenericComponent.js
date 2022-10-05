import React, { useState } from "react";

function GenericComponent ({
  subTitle, onChange, value, genericComponentSpan
}) {

  const [test, setTest] = useState('')

  const handleChange = (evt) => {
    const value = evt.target.value
    onChange(value)
  }

  return (
    <div className="generic-component">
      <h2 className="generic-component__subTitle">{subTitle}</h2>
      {/* <div className="generic-component__container"> */}

        <span className={`generic-component__span ${genericComponentSpan}`}>
          <input
            className="generic-component__input"
            value={value}
            type="number"
            onChange={handleChange}
          />
          ₽
        </span>
      </div>
    // </div>
  );
}

export default GenericComponent;

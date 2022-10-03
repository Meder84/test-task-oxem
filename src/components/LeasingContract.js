import React, { useState } from "react";
import Component from "./Component";
import GenericComponent from "./GenericComponent";

function LeasingContract ({value, handleChange}) {
  // const [value, setValue] = useState()

  // const handleChange = (evt) => {

  // }

  return (
    <div className="leasing-contract">
      <GenericComponent
        subTitle='Сумма договора лизинга'
        value={value}
        handleChange={handleChange}
      />
    </div>
  );
}

export default LeasingContract;

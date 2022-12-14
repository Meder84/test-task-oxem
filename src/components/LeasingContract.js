import React from "react";
import GenericComponent from "./GenericComponent";

function LeasingContract ({onChange, value}) {

  return (
    <div className="leasing-contract">
      <GenericComponent
        subTitle='Сумма договора лизинга'
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default LeasingContract;

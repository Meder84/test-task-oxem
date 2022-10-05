import React from "react";
import GenericComponent from "./GenericComponent";

function Payment ({onChange, value}) {

  return (
    <div className="payment">
      <GenericComponent
        subTitle='Ежемесячный платеж от'
        value={value}
        onChange={onChange}
        genericComponentSpan="payment__span"
      />
    </div>
  );
}

export default Payment;

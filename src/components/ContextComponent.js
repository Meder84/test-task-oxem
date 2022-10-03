import React from "react";
import { Context } from "../contexts/context";
import LeasingAmount from "./leasingAmount";


function ContextComponent () {

  return (
    <Context.Provider>
      <LeasingAmount />
    </Context.Provider>
  )
}

export default ContextComponent;

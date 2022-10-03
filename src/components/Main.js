import React, { useState } from "react";
import { Context } from "../contexts/context";
import Initial from "./Initial";
import LeasingContract from "./LeasingContract";
import LeasingTime from "./LeasingTime";
import Price from "./Price";

function Main(props) {
  const [state, setState] = useState();
  let valueInit = null;
  let valueLeasingTime = null;
  const summContract = valueInit + valueLeasingTime * 100;

  const handleChange = () => {
    setState(summContract)
  }

  return (
      <main className="main page__gradient">
        <h1 className="title">Рассчитайте стоимость автомобиля в лизинг</h1>
        <ul className="main__list">
          <li className="main__list-elem">
            <Price />
          </li>
          <li className="main__list-elem">
            <Initial
              onChange={valueInit}
            />
          </li>
          <li className="main__list-elem">
            <LeasingTime
              onChange={valueLeasingTime}
            />
          </li>
          <li className="main__list-elem">
            <LeasingContract
              value={state}
              handleChange={handleChange}
            />
          </li>
          <li className="main__list-elem">

          </li>
          <li className="main__list-elem">

          </li>
        </ul>
      </main>
  )
}

export default Main;

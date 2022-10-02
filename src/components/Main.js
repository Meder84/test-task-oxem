import React, {useContext} from "react";
import LeasingAmount from "./leasingAmount";
import Payment from "./Payment";
import Price from "./Price";

function Main(props) {

  return (
    <main className="main page__gradient">
      <h1 className="title">Рассчитайте стоимость автомобиля в лизинг</h1>
      <ul className="main__list">
        <li className="main__list-elem">
          <Price />
        </li>
        <li className="main__list-elem">
          <Payment />
        </li>
        <li className="main__list-elem">

        </li>
        <li className="main__list-elem">

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

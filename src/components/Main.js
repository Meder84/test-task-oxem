import React, { useEffect, useState } from "react";
import { Context } from "../contexts/context";
import Button from "./button";
import Initial from "./Initial";
import LeasingContract from "./LeasingContract";
import LeasingTime from "./LeasingTime";
import Payment from "./Payment";
import Price from "./Price";

function Main(props) {
  const [statePrice, setStatePrice] = useState(3300000);
  const [stateInit, setStateInit] = useState(420000);
  const [percent, setPersent] = useState(13);
  const [stateLeasingTime, setStateLeasingTime] = useState(40);

  const dataTotal = (statePrice - stateInit) * (3.5 / 12 * stateLeasingTime)
  const monthPay = (statePrice - stateInit) * ((0.035 * Math.pow((1 + 0.035), stateLeasingTime)) / (Math.pow((1 + 0.035), stateLeasingTime) - 1));

  const [totalLeasingContract, setTotalLeasingContract] = useState(dataTotal);
  const [totalPayment, setTotalPayment] = useState(monthPay);

  useEffect(()=> {
    calculateTotal();
    calculateTotalPayment();
  }, [statePrice, stateInit, stateLeasingTime, totalLeasingContract])

  let min = (statePrice / 100 * 10);
  let max = (statePrice / 100 * 60);;

  const handleChangePrice = (value) => {
    setStatePrice(value)
  }

  const handleChangeLeasing = (value) => {
    setStateLeasingTime(value)
  }

  const handleChangeInit = (value) => {
    const initialValue = Math.max(min, Math.min(max, Number(value)));
    const initialPercent = Math.round(value * 100 / statePrice);
    const resultInitialPercent = Math.round(Math.max(min, Math.min(max, Number(initialPercent))));

    setStateInit(initialValue)
    setPersent(resultInitialPercent)
    setStateInit(value);
  }

  function calculateTotal() {
    setTotalLeasingContract(dataTotal);
  }

  function calculateTotalPayment() {
    setTotalPayment(monthPay)
  }

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
      <form
        className="main page__gradient"
        name="name"
        onSubmit={handleSubmit}
      >
        <h1 className="title">Рассчитайте стоимость автомобиля в лизинг</h1>
        <ul className="main__list">
          <li className="main__list-elem">
            <Price
              onchange={handleChangePrice}
            />
          </li>
          <li className="main__list-elem">
            <Initial
              onChangeComponent={handleChangeInit}
              onChangeSlider={handleChangeInit}
              onChangePercent={handleChangeInit}
              value={stateInit}
              percent={percent}
            />
          </li>
          <li className="main__list-elem">
            <LeasingTime
              // value={stateLeasingTime}
              onChange={handleChangeLeasing}
            />
          </li>
          <li className="main__list-elem">
            <LeasingContract
              value={totalLeasingContract}
            />
          </li>
          <li className="main__list-elem">
            <Payment
              value={totalPayment}
            />
          </li>
          <li className="main__list-elem">
            <Button
            />
          </li>
        </ul>
      </form>
  )
}

export default Main;

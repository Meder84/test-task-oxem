import React, { useEffect, useState } from "react";
import { requestAuth } from "../utils/auth";
import Button from "./button";
import Initial from "./Initial";
import LeasingContract from "./LeasingContract";
import LeasingTime from "./LeasingTime";
import Payment from "./Payment";
import Price from "./Price";
import * as auth from '../utils/auth';
import Preloader from "./Preloader";
import { DEFAULT_ERROR } from '../utils/consts';

function Main(props) {
  const [statePrice, setStatePrice] = useState(3300000);
  const [stateInit, setStateInit] = useState(420000);
  const [percent, setPersent] = useState(13);
  const [stateLeasingTime, setStateLeasingTime] = useState(40);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(false)

  const dataTotal = (statePrice - stateInit) * (3.5 / 12 * stateLeasingTime)
  const monthPay = (statePrice - stateInit) * ((0.035 * Math.pow((1 + 0.035), stateLeasingTime)) / (Math.pow((1 + 0.035), stateLeasingTime) - 1));

  const [totalLeasingContract, setTotalLeasingContract] = useState(dataTotal);
  const [totalPayment, setTotalPayment] = useState(monthPay);

  let min = (statePrice / 100 * 10);
  let max = (statePrice / 100 * 60);;

  useEffect(()=> {
    calculateTotal();
    calculateTotalPayment();
  }, [statePrice, stateInit, stateLeasingTime, totalLeasingContract])

  const handleChangePrice = (value) => {
    const initialPercent = Math.round(stateInit * 100 / statePrice);
    setStatePrice(value)
    setPersent(initialPercent)
  }

  const handleChangeLeasing = (value) => {
    setStateLeasingTime(value)
  }

  const handleChangeInit = (value) => {
    const initialValue = Math.round(value)
    const initialPercent = Math.round(value * 100 / statePrice);

    setStateInit(initialValue)
    // setStateInit(test)
    setPersent(initialPercent)
    setStateInit(value);
  }

  function calculateTotal() {
    setTotalLeasingContract(Math.round(dataTotal));
  }

  function calculateTotalPayment() {
    setTotalPayment (Math.round(monthPay))
  }

  const handleSubmit = (evt) => {
    setDisabled(true)
    setIsLoading(true)
    evt.preventDefault();
    handleSubmitForm()
  };

  function handleSubmitForm(data) {
    auth.requestAuth(data)
    .then((data) => {
      console.log(data)
      if (!data) return;
      setTimeout(() => {
        setIsLoading(false)
        setDisabled(false)
      }, 1000);
    })
    .catch(() =>  setMessage(DEFAULT_ERROR))
    .finally(() => setIsLoading(false) )
  }

  return (
      <form
        className="main page__gradient"
        name="name"
        onSubmit={handleSubmit}
      >
        <h1 className="title">Рассчитайте стоимость автомобиля в лизинг</h1>
        <ul className="main__list1">
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
              min={min}
              max={max}
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
        </ul>
        <ul className="main__list2">
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
              disabled={disabled}
              textButton="Оставить заявку"
              onClick={handleSubmit}
            />
            <p className="main__error-text">{message}</p>
          </li>
        </ul>
      </form>
  )
}

export default Main;

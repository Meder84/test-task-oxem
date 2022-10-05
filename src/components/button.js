import Preloader from "./Preloader";

const Button = ({disabled, textButton}) => {

  return (
    <button
      className={
        !disabled
        ? "button opacity"
        : "button__disabled"
      }
      type="submit"
      disabled={disabled}
    >
     {!disabled ? textButton : <Preloader />}
    </button>
  )
}

export default Button;

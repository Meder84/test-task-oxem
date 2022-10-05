import Component from "./Component";

function Initial ({value, percent, onChangeComponent,
  onChangeSlider, onChangePercent, min, max
}) {

  const handleChangePercent = (evt) => {
    const value = evt.target.value
    onChangePercent (value)
  }

  return (
    <div className="initial">
      <Component
        subTitle="Первоначальный взнос"
        value={value}
        onChangeComponent={onChangeComponent}
        onChangeSlider={onChangeSlider}
        min={min}
        max={max}
        step={1}
        componentContainer="initial__container"
        componentContainerChild="initial__container-child"
        // sliderComponentInput="initial__input-slider"
        textSpan='₽'
      >
        <span className="initial__span">
          <input
            type="number"
            className="initial__input-percent"
            min={0}
            max={100}
            step={1}
            value={percent}
            onChange={handleChangePercent}
          />
          %
        </span>
      </Component>
    </div>
  );
}

export default Initial;

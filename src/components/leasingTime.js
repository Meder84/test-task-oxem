function Ranges(props) {
  const onChange = ({ target: t }) => {
    const index = +t.dataset.index;
    const value = +t.value;
    const values = props.values.map((n, i) => i === index ? value : n);

    if (props.max >= values.reduce((acc, n) => acc + n, 0)) {
      props.onChange(values);
    }
  };

  return (
    <div>
      {props.values.map((n, i) => (
        <div>
          <input
            type="range"
            data-index={i}
            max={props.max}
            value={n}
            onChange={onChange}
          />
          {n}
        </div>
      ))}
    </div>
  );
}

function App() {
  const [ ranges, setRanges ] = React.useState([
    { values: [ 5, 15, 25, 35 ], max: 100 },
    { values: [ 1, 2, 3 ], max: 20 },
    { values: [ 0, 0, 0, 50 ], max: 50 },
  ]);

  const onChange = (index, values) =>
    setRanges(ranges.map((n, i) => i === index ? { ...n, values } : n));

  return (
     <div>
       {ranges.map((n, i) => (
         <div className="ranges">
           <Ranges {...n} onChange={values => onChange(i, values)} />
           <div>SUM: {n.values.reduce((acc, n) => acc + n, 0)}</div>
           <div>MAX SUM: {n.max}</div>
         </div>
       ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

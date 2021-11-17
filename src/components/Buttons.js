const Buttons = (props) => {
  return (
    <div className="buttons">
      <button onClick={props.clearHandler} className="special">
        AC
      </button>
      <button onClick={props.enterHandler} value="±" className="special">
        ±
      </button>
      <button onClick={props.enterHandler} value="%" className="special">
        %
      </button>
      <button onClick={props.enterHandler} value="1" className="numbers">
        1
      </button>
      <button onClick={props.enterHandler} value="2" className="numbers">
        2
      </button>
      <button onClick={props.enterHandler} value="3" className="numbers">
        3
      </button>
      <button onClick={props.enterHandler} value="4" className="numbers">
        4
      </button>
      <button onClick={props.enterHandler} value="5" className="numbers">
        5
      </button>
      <button onClick={props.enterHandler} value="6" className="numbers">
        6
      </button>
      <button onClick={props.enterHandler} value="7" className="numbers">
        7
      </button>
      <button onClick={props.enterHandler} value="8" className="numbers">
        8
      </button>
      <button onClick={props.enterHandler} value="9" className="numbers">
        9
      </button>
      <button onClick={props.enterHandler} value="0" className="numbers">
        0
      </button>
      <button onClick={props.enterHandler} value="." className="numbers">
        .
      </button>
      <button onClick={props.enterHandler} value="÷" className="character">
        ÷
      </button>
      <button onClick={props.enterHandler} value="×" className="character">
        ×
      </button>
      <button onClick={props.enterHandler} value="-" className="character">
        -
      </button>
      <button onClick={props.enterHandler} value="+" className="character">
        +
      </button>
      <button onClick={props.equalHandler} value="=" className="character">
        =
      </button>
    </div>
  );
};

export default Buttons;

const Buttons = (props) => {
  return (
    <div className="numbers">
      <button onClick={props.clearHandler}>AC</button>
      <button onClick={props.enterHandler} value="±">
        ±
      </button>
      <button onClick={props.enterHandler} value="%">
        %
      </button>
      <button onClick={props.enterHandler} value="1">
        1
      </button>
      <button onClick={props.enterHandler} value="2">
        2
      </button>
      <button onClick={props.enterHandler} value="3">
        3
      </button>
      <button onClick={props.enterHandler} value="4">
        4
      </button>
      <button onClick={props.enterHandler} value="5">
        5
      </button>
      <button onClick={props.enterHandler} value="6">
        6
      </button>
      <button onClick={props.enterHandler} value="7">
        7
      </button>
      <button onClick={props.enterHandler} value="8">
        8
      </button>
      <button onClick={props.enterHandler} value="9">
        9
      </button>
      <button onClick={props.enterHandler} value="0">
        0
      </button>
      <button onClick={props.enterHandler} value=".">
        .
      </button>
      <button onClick={props.enterHandler} value="÷">
        ÷
      </button>
      <button onClick={props.enterHandler} value="×">
        ×
      </button>
      <button onClick={props.enterHandler} value="-">
        -
      </button>
      <button onClick={props.enterHandler} value="+">
        +
      </button>
      <button onClick={props.equalHandler} value="=">
        =
      </button>
    </div>
  );
};

export default Buttons;

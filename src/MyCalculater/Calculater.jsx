import { useState } from "react";

export default function Botons() {
  const [value, setValue] = useState("");

  const reset = () => {
    setValue("");
  };

  const back = () => {
    setValue(value.slice(0, -1));
  };

  const evalueExpresion = () => {
    try {
      const result = eval(value);
      setValue(result.toString());
    } catch (error) {
      console.error(`error: ${error}`);
    }
  };

  return (
    <div className="cont">
      <div className="calculater">
        <div className="display">
          <input
            type="text"
            name="display"
            value={value}
            onClick={(e) => setValue(value + e.target.value)}
          />
        </div>

        <div>
          <button value="1" onClick={(e) => setValue(value + e.target.value)}>
            1
          </button>
          <button value="2" onClick={(e) => setValue(value + e.target.value)}>
            2
          </button>
          <button value="3" onClick={(e) => setValue(value + e.target.value)}>
            3
          </button>
          <button value="+" onClick={(e) => setValue(value + e.target.value)}>
            +
          </button>
        </div>

        <div>
          <button value="4" onClick={(e) => setValue(value + e.target.value)}>
            4
          </button>
          <button value="5" onClick={(e) => setValue(value + e.target.value)}>
            5
          </button>

          <button value="6" onClick={(e) => setValue(value + e.target.value)}>
            6
          </button>

          <button value="-" onClick={(e) => setValue(value + e.target.value)}>
            -
          </button>
        </div>

        <div>
          <button value="7" onClick={(e) => setValue(value + e.target.value)}>
            7
          </button>
          <button value="8" onClick={(e) => setValue(value + e.target.value)}>
            8
          </button>

          <button value="9" onClick={(e) => setValue(value + e.target.value)}>
            9
          </button>

          <button value="*" onClick={(e) => setValue(value + e.target.value)}>
            *
          </button>
        </div>

        <div>
          <button value="/" onClick={(e) => setValue(value + e.target.value)}>
            /
          </button>
          <button value="0" onClick={(e) => setValue(value + e.target.value)}>
            0
          </button>
          <button value="=" onClick={evalueExpresion} className="equal">
            =
          </button>

          <div>
            <button value="Back" onClick={back}>
              Back
            </button>
            <button value="Reset" onClick={reset}>
              R
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

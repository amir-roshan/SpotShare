import { useReducer, useEffect } from "react";
import "./Input.css";
import { validate } from "../../utils/validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouch: true,
      };
    default:
      return state;
  }
};

const Input = ({
  id,
  label,
  element,
  type,
  placeholder,
  rows,
  validators,
  error,
  onInput,
  initialValue = "",
  initialValid = false,
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue,
    isValid: initialValid,
    isTouch: false,
  });

  const { value: inputValue, isValid: inputIsValid } = inputState;

  useEffect(() => {
    onInput(id, inputValue, inputIsValid);
  }, [id, inputValue, inputIsValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const createdElement =
    element === "input" ? (
      <input
        onChange={changeHandler}
        type={type}
        id={id}
        placeholder={placeholder}
        value={inputState.value}
        onBlur={touchHandler}
      />
    ) : (
      <textarea
        onChange={changeHandler}
        id={id}
        placeholder={placeholder}
        rows={rows || 3}
        value={inputState.value}
        onBlur={touchHandler}
      />
    );

  return (
    <>
      <div
        className={`form-control ${
          !inputState.isValid && inputState.isTouch && "form-control--invalid"
        }`}
      >
        <label htmlFor={id}>{label}</label>
        {createdElement}
        {!inputState.isValid && <p>{error}</p>}
      </div>
    </>
  );
};

export default Input;

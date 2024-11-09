import { useReducer } from "react";
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
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    isTouch: false,
  });

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

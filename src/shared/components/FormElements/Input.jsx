import { useReducer } from "react";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: true,
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
  });

  const changeHandler = (event) => {
    dispatch({ type: "CHANGE", val: event.target.value });
  };

  const createdElement =
    element === "input" ? (
      <input
        onChange={changeHandler}
        type={type}
        id={id}
        placeholder={placeholder}
        value={inputState.value}
      />
    ) : (
      <textarea
        onChange={changeHandler}
        id={id}
        placeholder={placeholder}
        rows={rows || 3}
        value={inputState.value}
      />
    );

  return (
    <>
      <div
        className={`form-control ${
          !inputState.isValid && "form-control--invalid"
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

import { useCallback, useReducer } from "react";

import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input";
import { Button } from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validators";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE": {
      let formIsValid = true;

      for (const inputID in state.inputs) {
        if (inputID === action.inputID) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputID].isValid;
        }
        return {
          ...state,
          input: {
            ...state.inputs,
            [action.inputID]: { value: action.value, isValid: action.isValid },
          },
          isValid: formIsValid,
        };
      }
    }
  }
};

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      inputID: id,
      isValid: isValid,
    });
  }, []);

  return (
    <>
      <form className="place-form">
        <Input
          id="title"
          type="text"
          label="Title"
          element="input"
          validators={[VALIDATOR_REQUIRE()]}
          error={"Please enter a valid title."}
          onInput={inputHandler}
        ></Input>
        <Input
          id="description"
          type="text"
          label="Title"
          element="input"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
          error={"Please enter a valid description (at least 5 characters)."}
          onInput={inputHandler}
        ></Input>
        <Button type="submit" disable={!formState.isValid}>
          Add Place
        </Button>
      </form>
    </>
  );
};

export default NewPlace;

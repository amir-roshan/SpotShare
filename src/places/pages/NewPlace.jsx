import "./PlaceForm.css";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validators";

import { useForm } from "../../shared/hooks/form-hook";

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <>
      <form className="place-form" onSubmit={placeSubmitHandler}>
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
          label="Description"
          element="textarea"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
          error={"Please enter a valid description (at least 5 characters)."}
          onInput={inputHandler}
        ></Input>
        <Input
          id="address"
          type="text"
          label="Address"
          element="input"
          validators={[VALIDATOR_REQUIRE()]}
          error={"Please enter a valid address."}
          onInput={inputHandler}
        ></Input>
        <Button type="submit" disabled={!formState.isValid}>
          Add Place
        </Button>
      </form>
    </>
  );
};

export default NewPlace;

import { useCallback } from "react";

import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validators";

const NewPlace = () => {
  const titleInputHandler = useCallback((id, value, isValid) => {}, []);

  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

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
          onInput={titleInputHandler}
        ></Input>
        <Input
          id="description"
          type="text"
          label="Title"
          element="input"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
          error={"Please enter a valid description (at least 5 characters)."}
          onInput={descriptionInputHandler}
        ></Input>
      </form>
    </>
  );
};

export default NewPlace;

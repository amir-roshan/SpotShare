import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validators";

const NewPlace = () => {
  return (
    <>
      <form className="place-form">
        <Input
          type="text"
          label="Title"
          element="input"
          validators={[VALIDATOR_REQUIRE()]}
          error={"Please enter a valid title."}
        ></Input>
      </form>
    </>
  );
};

export default NewPlace;

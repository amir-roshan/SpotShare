import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input";

const NewPlace = () => {
  return (
    <>
      <form className="place-form">
        <Input
          type="text"
          label="Title"
          element="input"
          validators={[]}
          error={"Please enter a valid title."}
        ></Input>
      </form>
    </>
  );
};

export default NewPlace;

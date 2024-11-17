import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UI/Card";

import { useForm } from "../../shared/hooks/form-hook";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../../shared/utils/validators";

import "./Auth.css";

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <>
      <Card className="authentication">
        <h2>Login Required</h2>
        <hr />
        <form onSubmit={placeUpdateSubmitHandler}>
          <Input
            id="email"
            element="input"
            type="email"
            label="E-mail"
            validators={[VALIDATOR_EMAIL()]}
            error="Please enter a valid Email"
            onInput={inputHandler}
          ></Input>
          <Input
            id="password"
            element="input"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(8)]}
            error="Please enter a valid Password (minimum 8 characters)"
            onInput={inputHandler}
          ></Input>
          <Button type="onSubmit" disabled={!formState.isValid}>
            LOG IN
          </Button>
        </form>
      </Card>
    </>
  );
};

export default Auth;

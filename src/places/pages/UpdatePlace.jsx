import { useParams } from "react-router-dom";

import { useForm } from "../../shared/hooks/form-hook";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/utils/validators";

import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFg9lIo9D1LEh4_4p0V9LvFk2LKj4WvjqsYw&s",
    title: "Beautiful Beach",
    description: "A serene beach with golden sands and crystal-clear water.",
    address: "123 Ocean Drive, Beach City",
    creatorId: 1,
    coordinates: { lat: 34.0522, lng: -118.2437 },
  },
  {
    id: "p2",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFg9lIo9D1LEh4_4p0V9LvFk2LKj4WvjqsYw&s",
    title: "Mountain Cabin",
    description: "A cozy cabin in the mountains with breathtaking views.",
    address: "456 Mountain Road, Hilltop",
    creatorId: 1,
    coordinates: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: "p3",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFg9lIo9D1LEh4_4p0V9LvFk2LKj4WvjqsYw&s",
    title: "City Park",
    description: "A vibrant park located in the heart of the city.",
    address: "789 Central Ave, Metropolis",
    creatorId: 2,
    coordinates: { lat: 37.7749, lng: -122.4194 },
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const place = DUMMY_PLACES.find((place) => place.id === placeId);

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: place ? place.title : "",
        isValid: !!place,
      },
      description: {
        value: place ? place.description : "",
        isValid: !!place,
      },
    },
    !!place
  );

  if (!place) {
    return <div className="center">{"Place not found"}</div>;
  }

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <>
      <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          error="Please enter a valid title"
          onInput={inputHandler}
          initialValue={formState.inputs.title.value}
          initialValid={formState.inputs.title.isValid}
        ></Input>
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          error="Please enter a valid description (minimum 5 characters)"
          onInput={inputHandler}
          initialValue={formState.inputs.description.value}
          initialValid={formState.inputs.description.isValid}
        ></Input>
        <Button type="onSubmit" disabled={!formState.isValid}>
          UPDATE PLACE
        </Button>
      </form>
    </>
  );
};

export default UpdatePlace;

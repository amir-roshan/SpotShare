import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

export const UserPlaces = () => {
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

  const { userId } = useParams(); // userId is a string
  const loadedPlaces = DUMMY_PLACES.filter(
    (place) => place.creatorId === parseInt(userId)
  );

  return (
    <>
      <PlaceList items={loadedPlaces} />
    </>
  );
};

export default UserPlaces;

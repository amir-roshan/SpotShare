import { useState } from "react";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UI/Card";
import "./PlaceItem.css";
import Modal from "../../shared/components/UI/Modal";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const PlaceItem = ({ id, image, title, address, description, coordinates }) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => {
    setShowMap(true);
  };

  const closeMapHandler = () => {
    setShowMap(false);
  };

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={address}
        contentClass={"place-item__modal-content"}
        footerClass={"place-item__modal-actions"}
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <APIProvider
            apiKey={"AIzaSyDfhxu4O1gId47bvsjGRsm-4zSCoqEKybs"}
            onLoad={() => console.log("Maps API has loaded.")}
          >
            <Map
              defaultZoom={16}
              defaultCenter={coordinates}
              onCameraChanged={(ev) =>
                console.log(
                  "camera changed:",
                  ev.detail.center,
                  "zoom:",
                  ev.detail.zoom
                )
              }
            >
              <Marker position={coordinates} />
            </Map>
          </APIProvider>
        </div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={image} alt={title} />
          </div>
          <div className="place-item__info">
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;

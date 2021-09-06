import React, {useContext} from 'react'
import { Card, Button } from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import {getEndpointUrl} from '../services/utils'
import { ThemeContext } from "../contexts/ThemeContext";

const PlanetCard = ({planet}) => {
  const{isBlueTheme} = useContext(ThemeContext)
const history = useHistory()

   const goToDescriptionPage = (url) => {
     history.push("/planets/" + getEndpointUrl(url));
   };

  return (
    <Card style={{ width: "18rem" }} className="my-3">
      <Card.Body>
        <Card.Title
          className={isBlueTheme ? "blue-theme-text" : "dark-theme-text"}
        >
          {planet.name}
        </Card.Title>
        <div className="card-description">
          <p>
            <span>climate:</span>
            {planet.climate}
          </p>
          <p>
            <span>gravity:</span>
            {planet.gravity}
          </p>
          <p>
            <span>diameter:</span>
            {planet.diameter}
          </p>
        </div>

        <Button
          className={isBlueTheme ? "blue-theme" : "dark-theme"}
          onClick={() => goToDescriptionPage(planet.url)}
          variant="primary"
        >
          More info
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PlanetCard

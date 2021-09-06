import React, {useContext} from 'react'
import { useHistory } from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'
import {getEndpointUrl} from '../services/utils'
import {ThemeContext} from '../contexts/ThemeContext'


const People = ({spec , i}) => {
  const {isBlueTheme} = useContext(ThemeContext)
 const history = useHistory();

  const goToDescriptionPage = (url) => {
    history.push("/people/"+getEndpointUrl(url));
  }
  
  return (
    <Card style={{ width: "18rem" }} className="my-3">
      <Card.Body>
        <Card.Title
          className={isBlueTheme ? "blue-theme-text" : "dark-theme-text"}
        >
          {spec.name}
        </Card.Title>
        <div className="card-description">
          <p>
            <span>birth:</span>
            {spec.birth_year}
          </p>
          <p>
            <span>height:</span>
            {spec.height}
          </p>
          <p>
            <span>hair:</span>
            {spec.hair_color}
          </p>
          <p>
            <span>eye:</span>
            {spec.eye_color}
          </p>
        </div>

        <Button 
          onClick={() => goToDescriptionPage(spec.url)}
          // variant="primary"
          className={isBlueTheme ? "blue-theme" : "dark-theme"}
        >
          More info
        </Button>
      </Card.Body>
    </Card>
  );
}

export default People

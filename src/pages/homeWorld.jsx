import React from 'react'
import {useParams, Link, useHistory} from 'react-router-dom'
import {useQuery} from 'react-query'
import {getPlanet} from '../services/SWAPI'
import { Container, Table, Button } from 'react-bootstrap'
import { getEndpointUrl } from "../services/utils";

const homeWorld = () => {
  const {id} = useParams()
  let history = useHistory()

    const {
      data,
      error,
      isError,
      isFetching,
      isLoading,
      isPreviousData,
    } = useQuery(["one-home-planet", id], () => getPlanet(id), {
      staleTime: 1000 * 60 * 5, // 5 mins
      cacheTime: 1000 * 60 * 30, // 30 mins
      keepPreviousData: true, // keep previous data
    });

    console.log(data)
  return (
    <Container>
      <p>Home world page</p>
      {data && (
        <>
        
         <h1> <small className="text-muted">name of world is:</small> {data.name}</h1> 
        
          <Table striped bordered hover className="text-left">
            <thead>
              <tr>
                <th> Property</th>
                <th> Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Climate</td>
                <td>{data.climate}</td>
              </tr>
              <tr>
                <td>Diameter</td>
                <td>{data.diameter} </td>
              </tr>
              <tr>
                <td>Gravity</td>
                <td>{data.gravity}</td>
              </tr>
              <tr>
                <td>Orbital period</td>
                <td>{data.orbital_period}</td>
              </tr>
              <tr>
                <td>Population</td>
                <td>{data.population}</td>
              </tr>
              <tr>
                <td>Rotation period</td>
                <td>{data.rotation_period}</td>
              </tr>
              <tr>
                <td>Surface water</td>
                <td>{data.surface_water}</td>
              </tr>
              <tr>
                <td>Terrain</td>
                <td>{data.terrain}</td>
              </tr>
              <tr>
                <td>Films</td>
                <td>
                  {data.films.map((film, i) => {
                    return (
                      <p key={i + new Date()}>
                        <Link to={"/films/"+getEndpointUrl(film)} key={i}>
                          link to film {i + 1}
                        </Link>
                      </p>
                    );
                  })}
                </td>
              </tr>
              <tr>
                <td>residents</td>
                <td>
                  {data.residents.map((resident, i) => {
                    return (
                      <p key={i + new Date()}>
                        <Link to={"/people/"+getEndpointUrl(resident)} key={i}>
                          link to resident {i + 1}
                        </Link>
                      </p>
                    );
                  })}
                </td>
              </tr>
            </tbody>
          </Table>
        </>
      )}
      <Button variant="secondary" onClick={() => history.goBack()}>
        Back
      </Button>
    </Container>
  );
};


export default homeWorld

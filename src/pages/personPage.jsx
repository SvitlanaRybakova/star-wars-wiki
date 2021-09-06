import React, { useContext } from "react";
import { useQuery } from "react-query";
import { getPerson } from "../services/SWAPI";
import { useParams, Link, useHistory } from "react-router-dom";
import { Container, Table, Button } from "react-bootstrap";

import {getEndpointUrl} from '../services/utils'

const personPage = () => {
  const { id } = useParams();
  let history = useHistory()
  const {
    data,
    error,
    isError,
    isFetching,
    isLoading,
    isPreviousData,
  } = useQuery(["person", id], () => getPerson(id), {
    staleTime: 1000 * 60 * 5, // 5 mins
    cacheTime: 1000 * 60 * 30, // 30 mins
    keepPreviousData: true, // keep previous data
  });

  return (
    <Container>
      {data && (
        <>
          <h1>{data.name}</h1>
          <Table striped bordered hover className="text-left">
            <thead>
              <tr>
                <th> Property</th>
                <th> Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Height</td>
                <td>{data.height} cm</td>
              </tr>
              <tr>
                <td>Mass</td>
                <td>{data.mass} kg</td>
              </tr>
              <tr>
                <td>Hair color</td>
                <td>{data.hair_color}</td>
              </tr>
              <tr>
                <td>Skin color</td>
                <td>{data.skin_color}</td>
              </tr>
              <tr>
                <td>Eye color</td>
                <td>{data.eye_color}</td>
              </tr>
              <tr>
                <td>Birth year</td>
                <td>{data.birth_year}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{data.gender}</td>
              </tr>
              <tr>
                <td>Home world</td>
                <td>
                  <Link to={"/planets/" + getEndpointUrl(data.homeworld)}>
                    click to see the hero's Home World
                  </Link>
                </td>
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

export default personPage;

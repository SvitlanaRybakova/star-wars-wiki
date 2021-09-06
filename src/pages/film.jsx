import React from 'react'
import {useParams, useHistory} from 'react-router-dom'
import { useQuery } from "react-query";
import { getFilms } from "../services/SWAPI";
import { Button, Container } from 'react-bootstrap';

const film = () => {
  const {id} = useParams()
  let history = useHistory()

  const {
    data,
    error,
    isError,
    isFetching,
    isLoading,
    isPreviousData,
  } = useQuery(["films", id], () => getFilms(id), {
    staleTime: 1000 * 60 * 5, // 5 mins
    cacheTime: 1000 * 60 * 30, // 30 mins
    keepPreviousData: true, // keep previous data
  });
  console.log(data)
  return (
    <Container>
      {data && (
        <>
          <h1>{data.title}</h1>
          <div>
            <p>
              Episode: <span>{data.episode_id}</span>
            </p>
            <p>{data.opening_crawl}</p>
            <p>Director: {data.director}</p>
            <p>Producer: {data.producer}</p>
            <p>Release date: {data.release_date}</p>
          </div>

          <Button variant="secondary" onClick={() => history.goBack()}>
            Back
          </Button>
        </>
      )}
    </Container>
  );
}

export default film

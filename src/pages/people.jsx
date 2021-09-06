import React,{useContext, useState} from 'react'
import { useQuery } from "react-query";
import { Container, Button, Col, Row } from 'react-bootstrap'
import { getPeople } from "../services/SWAPI";
import PeopleCard from '../components/PeopleCard'
import  Pagination  from "../components/Pagination"
// import {PeopleContext} from '../contexts/ThemeContext'


const peoples = () => {
  const [page, setPage] = useState(1);

  const {
    data,
    error,
    isError,
    isFetching,
    isLoading,
    isPreviousData,
  } = useQuery(["peoples", page], () => getPeople(page), {
    staleTime: 1000 * 60 * 5, // 5 mins
    cacheTime: 1000 * 60 * 30, // 30 mins
    keepPreviousData: true, // keep previous data
  });
  
 
  return (
    <Container className="py-3">
      <span>people page</span>
      <div>
        {isLoading && <p className="my-3">Loading people...</p>}

        {isError && (
          <p className="my-3">
            Sorry, tried to get posts but no stamps found ({error})
          </p>
        )}

        {data?.results && (
          <Row>
            {data.results.map((person, i) => (
              <Col lg={3} md={4} sm={6} key={i} style={{ marginRight: "20px" }}>
                <PeopleCard key={i} spec={person} i={i + 1} />
              </Col>
            ))}
          </Row>
        )}
      </div>
      {/* pagination */}

      <Pagination
        page={page}
        setPage={setPage}
        isPreviousData={isPreviousData}
        hasMore={data?.next}
      />
    </Container>
  );
}

export default peoples

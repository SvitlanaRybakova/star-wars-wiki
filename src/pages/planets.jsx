import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import { Container, Button, Col, Row } from "react-bootstrap";
import { getAllPlanets } from "../services/SWAPI";
import PlanetCard from "../components/PlanetCard";
// import SearchForm from "../components/SearchForm";
import Pagination from "../components/Pagination";
// import { PeopleContext } from "../contexts/ThemeContext";

const planets = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(null);

  const {
    data,
    error,
    isError,
    isFetching,
    isLoading,
    isPreviousData,
  } = useQuery(["all-planets", page], () => getAllPlanets(page), {
    staleTime: 1000 * 60 * 5, // 5 mins
    cacheTime: 1000 * 60 * 30, // 30 mins
    keepPreviousData: true, // keep previous data
  });

  return (
    <Container>
      {/* <SearchForm setSearch={setSearch} /> */}
      <span>planet page</span>
      {data?.results && (
        <Row>
          {data.results.map((planet, i) => (
            <Col lg={3} md={4} sm={6} key={i} style={{ marginRight: "20px" }}>
              <PlanetCard key={i} planet={planet} />
            </Col>
          ))}
        </Row>
      )}
      <Pagination
        page={page}
        setPage={setPage}
        isPreviousData={isPreviousData}
        hasMore={data?.next}
      />
    </Container>
  );
};

export default planets;

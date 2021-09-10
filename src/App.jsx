import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/home";
import PeoplesPage from "./pages/people";
import PlanetsPage from "./pages/planets";
import Navigation from "./components/Navigation";
import PageNotFound from "./pages/notFound";
import SpeciesPage from "./pages/personPage";
import FilmPage from './pages/film';
import HomeWorldPage from './pages/homeWorld'
import ThemeToggle from './components/ThemeToggle';
import GlobalFetchingSpinner from './components/GlobalFetchingSpinner'
import LazyLoad from "./components/LazyLoad"

function App() {
  
  return (
    <>
      <Navigation />

      <ThemeToggle />

      <div className="App">
        <GlobalFetchingSpinner />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/lazy">
            <LazyLoad />
          </Route>

          <Route exact path="/people">
            <PeoplesPage />
          </Route>

          <Route exact path="/planets">
            <PlanetsPage />
          </Route>

          <Route exact path="/people/:id">
            <SpeciesPage />
          </Route>
          <Route exact path="/films/:id">
            <FilmPage />
          </Route>
          <Route exact path="/planets/:id">
            <HomeWorldPage />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;

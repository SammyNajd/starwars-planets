import axios from "axios";
import { useState, useEffect } from "react";

import PlanetBarChart from "../components/PlanetsBarChart";
import PlanetsTable from "../components/PlanetsTable";
import { CircularProgress, Box} from "@mui/material";

function AllPlanetsPage() {
  const axios = require("axios");
  const promises = [];
  const planets = [];
  let planetsArr = [];

  const [isLoading, setIsLoading] = useState(true);
  const [loadedPlanets, setLoadedPlanets] = useState();

  function planetSort(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  useEffect(() => {
    setIsLoading(true);

    for (let page = 1; page <= 6; page++) {
      promises.push(
        axios
          .get("https://swapi.dev/api/planets/?page=" + page)
          .then((response) => {
            planets.push(response.data.results);
          })
      );
    }

    Promise.all(promises)
      .then(() => {
        setLoadedPlanets(
          planetsArr.concat.apply(planetsArr, planets).filter(Boolean)
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    // TODO: Add Spinner wheel
    return (
      <Box sx={{display: 'flex'}}>
        <CircularProgress />
      </Box>
    );
  }

  

  // Actual return should return a Chart and the Table
  return (
    <section>
      <h1>All Planets Page Mpre coming soon..</h1>
      <PlanetBarChart planets={loadedPlanets.sort(planetSort)} />
      <PlanetsTable planets={loadedPlanets.sort(planetSort)} />
    </section>
  );
}

export default AllPlanetsPage;

import axios from "axios";
import { useState, useEffect } from "react";
import { CircularProgress, Box, Grid, Typography} from "@mui/material";

import PlanetBarChart from "../components/PlanetsBarChart";
import PlanetsTable from "../components/PlanetsTable";
import MainBar from "../components/MainBar";
import classes from './AllPlanets.module.css';


function AllPlanetsPage() {
  const promises = [];
  const planets = [];
  let planetsArr = [];
  const SWAPI_URL = "https://swapi.dev/api/planets/?page=";
  const PAGE_COUNT = 6

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
    for (let page = 1; page <= PAGE_COUNT; page++) {
      promises.push(
        axios
          .get(SWAPI_URL + page)
          .then((response) => {
            planets.push(response.data.results);
          })
      );
    }

    Promise.all(promises)
      .then(() => {
        planetsArr = planetsArr.concat.apply(planetsArr, planets).filter(Boolean)
        setLoadedPlanets(
          planetsArr.sort(planetSort)
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return (
      <Box className={classes.loadingBox}>
        <CircularProgress className={classes.circularLoading} />
        <Typography variant="h6" className={classes.loadingText}>Loading..</Typography>
      </Box>
    );
  }
  
  return (
    <Box className={classes.box}>
      <Grid container spacing={2} direction="column" className={classes.mainGrid}>
        <Grid item >
          <MainBar />
        </Grid>
        <Grid item >
          <PlanetBarChart planets={loadedPlanets} />
        </Grid>
        <Grid item >
          <PlanetsTable planets={loadedPlanets} />
        </Grid>
      </Grid>
    </Box>

  );
}

export default AllPlanetsPage;

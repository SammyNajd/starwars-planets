import axios from "axios";
import { useState, useEffect, Fragment } from "react";

import PlanetBarChart from "../components/PlanetsBarChart";
import PlanetsTable from "../components/PlanetsTable";
import { CircularProgress, Box, Grid, Typography} from "@mui/material";

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
    return (
      <Box sx={{display: 'flex', justifyContent:"center", alignContent:"center"}}>
        <CircularProgress sx={{position:'absolute', top:'50%', left:'50%'}}/>
        <Typography variant="h6" sx={{position:'absolute', top:'55%', left:'48%'}}>Loading..</Typography>
      </Box>
    );
  }

  

  // Actual return should return a Chart and the Table
  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h2" sx={{textAlign:'center'}}>Star Wars Planets</Typography>
        </Grid>
        <Grid item xs={12}>
          <PlanetBarChart planets={loadedPlanets.sort(planetSort)} />
        </Grid>
        <Grid item xs={12}>
          <PlanetsTable planets={loadedPlanets.sort(planetSort)} />
        </Grid>
      </Grid>
    </Box>

  );
}

export default AllPlanetsPage;

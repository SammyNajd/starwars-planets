import axios from "axios";
import { useState, useEffect } from "react";

function AllPlanetsPage() {
  const axios = require("axios");
  const promises = [];
  const planets = [];
  let planetsArr = [];

  const [isLoading, setIsLoading] = useState(true);
  const [loadedPlanets, setLoadedPlanets] = useState();

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
        console.log(loadedPlanets);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }),
    [];

  if (isLoading) {
    // TODO: Add Spinner wheel
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  }

  // Actual return should return a Chart and the Table
  return (
    <section>
      <h1>All Planets</h1>
    </section>
  );
}

export default AllPlanetsPage;

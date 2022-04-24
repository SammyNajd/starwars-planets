import Plot from "react-plotly.js";
import { Fragment } from "react";

function PlanetBarChart(props) {
  return (
    <Fragment>
      <Plot
        data={[
          {
            type: "bar",
            x: props.planets.map((planet) => planet.name),
            y: props.planets.map((planet) => planet.population),
          },
        ]}
        layout={{ width: 1000, height: 500, title: "Planets and Population" }}
      />
    </Fragment>
  );
}

export default PlanetBarChart;

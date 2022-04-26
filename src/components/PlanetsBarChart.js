import Plot from "react-plotly.js";
import { Fragment, useState } from "react";
import {Select, MenuItem, InputLabel, FormControl, FormHelperText, SelectChangeEvent } from "@mui/material";



function PlanetBarChart(props) {

  const [chartingOption, setChartingOption] = useState('population')
  const chartingOptionDisplayText = {
    "diameter": "Diameter",
    "rotation_period": "Rotation Period",
    "orbital_period": "Orbital Period",
    "surface_water": "Surface Water",
    "population": "Population"
  }

  function handleChange(e) {
    setChartingOption(e.target.value)
  }

  // Left off here, do I need to use a useEffect hook to update the data?
  // Check more plotly resources

  function setChartingData() {
    if (chartingOption === 'rotation_period'){
      return props.planets.map((planet) => planet.rotation_period)
    }
    else if (chartingOption === 'orbital_period') {
      return props.planets.map((planet) => planet.orbital_period)
    }
    else if (chartingOption === 'diameter') {
      return props.planets.map((planet) => planet.diameter)
    }
    else if (chartingOption == 'surface_water'){
      return props.planets.map((planet) => planet.surface_water)
    }
    else {
      return props.planets.map((planet) => planet.population)
    }
  }


  return (
    <Fragment>
      <FormControl sx={{m: 1, minWidth: 120}}>
        <InputLabel id="chartingInput">Chart Options</InputLabel>
        <Select
          labelId='chartingInputLabel'
          id="chartingInput"
          value={chartingOption}
          label="Charting Options"
          onChange={handleChange}>
            <MenuItem value={'population'}>Population</MenuItem>
            <MenuItem value={'rotation_period'}>Rotation Period</MenuItem>
            <MenuItem value={'orbital_period'}>Orbital Period</MenuItem>
            <MenuItem value={'diameter'}>Diameter</MenuItem>
            <MenuItem value={'surface_water'}>Surface Water</MenuItem>
          </Select>
          <FormHelperText>Select a value to chart by</FormHelperText>
      </FormControl>

      <Plot
        data={[
          {
            type: "bar",
            x: props.planets.map((planet) => planet.name),
            y: setChartingData(),
          },
        ]}
        layout={{ width: 1000, height: 500, title: "Planets and " + chartingOptionDisplayText[chartingOption] }}
      />
    </Fragment>
  );
}

export default PlanetBarChart;

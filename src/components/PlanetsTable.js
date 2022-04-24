import { DataGrid } from "@mui/x-data-grid";
import { Fragment } from "react";

function PlanetsTable(props) {
  let idCounter = 0
  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "population", headerName: "Population", width: 150 },
    { field: "rotation_period", headerName: "Rotation Period", width: 150 },
    { field: "orbital_period", headerName: "Orbital Period", width: 150 },
    { field: "diameter", headerName: "Diameter", width: 150 },
    { field: "climate", headerName: "Climate", width: 150 },
    { field: "surface_water", headerName: "Surface Water", width: 150 },
  ];

  function cleanPlanetData(planets) {
    return planets.map((planet) => {
      return {
          "id": idCounter++,
          "name": planet.name,
          "population": planet.population,
          "rotation_period": planet.rotational_period,
          "orbital_period": planet.orbital_period,
          "diameter": planet.diameter,
          "climate": planet.climate,
          "surface_water": planet.surface_water

      };
    });
  }

  return (
    <Fragment>
      <div style={{ height: 300, width: "75%" }}>
        <DataGrid rows={cleanPlanetData(props.planets)} columns={columns} rowsPerPageOptions={[10]} pageSize={10} pagination />
      </div>
    </Fragment>
  );
}

export default PlanetsTable;

import { DataGrid } from "@mui/x-data-grid";
import {Box} from '@mui/material';

import classes from './styles/PlanetsTable.module.css';

function PlanetsTable(props) {
  let idCounter = 0
  const columns = [
    { field: "name", headerName: "Name", minWidth: '100', flex: 1 },
    { field: "population", headerName: "Population", minWidth: '100',  flex: 1 },
    { field: "rotation_period", headerName: "Rotation Period",  minWidth: '100', flex: 1 },
    { field: "orbital_period", headerName: "Orbital Period",  minWidth: '100', flex: 1 },
    { field: "diameter", headerName: "Diameter",  minWidth: '100', flex: 1 },
    { field: "climate", headerName: "Climate",  minWidth: '100', flex: 1 },
    { field: "surface_water", headerName: "Surface Water",  minWidth: '100', flex: 1 },
  ];

  const styles = theme => ({
    activeSortIcon: {
      opacity: 1,
      color: 'white'
    },
  })

  function cleanPlanetData(planets) {
    return planets.map((planet) => {
      return {
          "id": idCounter++,
          "name": planet.name,
          "population": planet.population,
          "rotation_period": planet.rotation_period,
          "orbital_period": planet.orbital_period,
          "diameter": planet.diameter,
          "climate": planet.climate,
          "surface_water": planet.surface_water

      };
    });
  }
 
  return (
      <Box sx={{ height: 400, width: '100vh'}}>
        <DataGrid sx={{'.MuiDataGrid-columnHeader': {
          backgroundColor: '#3f50b5',
          color: 'white'
        }}} rows={cleanPlanetData(props.planets)} classes={{sortIcon: styles.activeSortIcon}} 
            columns={columns} rowsPerPageOptions={[10]} pageSize={10} pagination />
      </Box>
  );
}

export default PlanetsTable;

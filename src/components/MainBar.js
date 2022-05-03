import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import classes from './styles/MainBar.module.css'

function MainBar() {
    return (
        <Box className={classes.box}>
        <AppBar position="static" sx={{backgroundColor: "#3f50b5"}} >
            <Toolbar>
            <Typography variant="h2" component="div" className={classes.typography}>
                Star Wars Planets
            </Typography>
            </Toolbar>
        </AppBar>
        </Box>
    );
}

export default MainBar;
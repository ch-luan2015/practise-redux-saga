import { Box, makeStyles } from '@material-ui/core';
import { Header, Sidebar } from 'components/common';
import { Dashboard } from 'features/dashboard';
import { Students } from 'features/students';
import { Route, Switch } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateRows: "auto 1fr",
    gridAutoColumns: "240px 1fr",
    gridTemplateAreas: `"header header" "sidebar main"`,
    minHeight: "100vh" // cho no full screen
  },
  header: {
    gridArea: "header",
  },
  sidebar: {
    gridArea: "sidebar",
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper
  },
  main: {
    gridArea: "main",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 3)
  }
  //Moi don vi 1=8px , spacing tren duoi 2 trai phai 3  = 16px 24px
}))

export function AdminLayout() {

  const classes = useStyles();


  return <Box className={classes.root}>
    <Box className={classes.header}><Header /></Box>
    <Box className={classes.sidebar}><Sidebar /></Box>
    <Box className={classes.main}>
      <Switch>
        <Route path="/admin/dashboard">
          <Dashboard />
        </Route>
        <Route path="/admin/students">
          <Students />
        </Route>
      </Switch>
    </Box>

  </Box>
}



import { makeStyles } from '@material-ui/core';
import { Dashboard, PeopleAlt } from '@mui/icons-material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  link: {
    color: "inherit",
    textDecoration: "none",
    //Khi classLink co active thi sua background cua thang div con truc tiep cua no
    '&.active > div': {
      background: theme.palette.action.selected
    }
  }

}))
//Navbar khi duoc chon se co 1 classes active vao html
export function Sidebar() {

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <nav aria-label="main mailbox folders">
        <List>
          {/* Dung Navlink de biet cai nao dang Active khac voi link */}
          <NavLink to="/admin/dashboard" className={classes.link}>
            <ListItem disablePadding button>
              <ListItemButton>
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink to="/admin/students" className={classes.link}>
            <ListItem disablePadding button>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleAlt />
                </ListItemIcon>
                <ListItemText primary="Students" />
              </ListItemButton>
            </ListItem>
          </NavLink>

        </List>
      </nav>

    </Box>
  )
}

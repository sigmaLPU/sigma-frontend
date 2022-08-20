// common imports
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

// ui imports
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box'; // container type box
import MuiDrawer from '@mui/material/Drawer'; 
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider'; // separate container
import IconButton from '@mui/material/IconButton'; // Parent component to fit icon inside it
import MenuIcon from '@mui/icons-material/Menu'; // side bar open icon
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// icons for top bar/ nav bar
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

// icons for side bar
import FindInPageIcon from '@mui/icons-material/FindInPage'; // search
import DashboardIcon from '@mui/icons-material/Dashboard'; // dashboard
import GroupsIcon from '@mui/icons-material/Groups'; // teams
import BadgeIcon from '@mui/icons-material/Badge'; // Guest visit
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront'; // meeting
import FolderSharedIcon from '@mui/icons-material/FolderShared'; // shared data
import LinkIcon from '@mui/icons-material/Link'; // Link
import ConstructionIcon from '@mui/icons-material/Construction'; //tools
import SettingsIcon from '@mui/icons-material/Settings'; //setting




const drawerWidth = 240;

// when we open side bar
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

// when we close side bar
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function NavSideBar(props) {
  const history = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const SideBarIcons = {
    "top":[
      {name:"Search",icon:<FindInPageIcon fontSize="large"/>,"url":"/search"},
      {name:"Dashbooad",icon:<DashboardIcon fontSize="large"/>,"url":"/"},
      {name:"Team",icon:<GroupsIcon fontSize="large"/>,"url":"/team-management"},
      {name:"Guest Visit",icon:<BadgeIcon fontSize="large"/>,"url":"/gb"},
      {name:"Meetings",icon:<VideoCameraFrontIcon fontSize="large"/>,"url":"/meeting"},
      {name:"Shared data",icon:<FolderSharedIcon fontSize="large"/>,"url":"/outread-data"},
      {name:"Important Links",icon:<LinkIcon fontSize="large"/>,"url":"/li"}
    ],
    "bottom":[
      {name:"Tools",icon:<ConstructionIcon fontSize="large"/>,"url":"/tools"},
      {name:"Settings",icon:<SettingsIcon fontSize="large"/>,"url":"/setting"}
    ]
  }


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" style={{backgroundColor:"white",color:"black"}} open={open}>
        <Toolbar style={{display:"flex",justifyContent:"space-between"}}>


          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon style={{color:"black"}} fontSize="large"/>
          </IconButton>


          <Typography variant="h6" noWrap component="div">

          </Typography>

          <div>
            <IconButton>
              {props?.anyNotification ? <NotificationsActiveIcon fontSize="large"/> : <NotificationsNoneIcon fontSize="large"/> }
            </IconButton>

            <IconButton>
              <PersonIcon fontSize="large"/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>


      <Drawer className="h-100 d-flex justify-content-between " variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
  
        <Divider />
        <List style={{backgroundColor:"#f07f1a",height:"100%"}}>
          {SideBarIcons["top"].map((iconObject, index) => (
            <ListItem key={iconObject.name} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={() => history(iconObject.url)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {iconObject.icon}
                </ListItemIcon>
                <ListItemText primary={iconObject.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List  style={{backgroundColor:"#f07f1a"}}>
          {SideBarIcons["bottom"].map((iconObject, index) => (
            <ListItem key={iconObject.name} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {iconObject.icon}
                </ListItemIcon>
                <ListItemText primary={iconObject.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{marginTop: props.marginTop ? props.marginTop :"2rem",...props?.childCSS}}>
        {props.children}
      </Box>
    </Box>
  );
}

            // {props?.currentPageName ? props?.currentPageName : "DIVISION OF INTERNATIONAL AFFAIRS" }

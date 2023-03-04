// common imports
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
// icons for top bar/ nav bar
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

// icons for side bar
import DashboardIcon from './resource/navbar_icons/dashboard.svg';
import GuestVisitIcon from './resource/navbar_icons/guest_visit.svg';
import LinkIcon from './resource/navbar_icons/link.svg';
import MeetingIcon from './resource/navbar_icons/meeting.svg';
import SearchIcon from './resource/navbar_icons/search.svg';
import SettingIcon from './resource/navbar_icons/setting.svg';
import SharedDataIcon from './resource/navbar_icons/shared_data.svg';
import TeamIcon from './resource/navbar_icons/team.svg';
import ToolIcon from './resource/navbar_icons/tools.svg';
import { Logout, PersonAdd, PersonAddAlt, Settings, TollOutlined } from '@mui/icons-material';
import { Avatar, Menu, MenuItem, Paper } from '@mui/material';

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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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
}));

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
    top: [
      {
        name: (
          <span style={{ fontSize: '22px', fontWeight: '700' }}>Search</span>
        ),
        icon: (
          <img src={SearchIcon} style={{ height: '34px', width: '34px' }} />
        ),
        url: '/search',
      },
      {
        name: (
          <span style={{ fontSize: '22px', fontWeight: '700' }}>Dashboard</span>
        ),
        icon: (
          <img src={DashboardIcon} style={{ height: '34px', width: '34px' }} />
        ),
        url: '/dashboard',
      },
      {
        name: <span style={{ fontSize: '22px', fontWeight: '700' }}>Team</span>,
        icon: <img src={TeamIcon} style={{ height: '34px', width: '34px' }} />,
        url: '/team',
      },
      {
        name: (
          <span style={{ fontSize: '22px', fontWeight: '700' }}>
            Guest Visit
          </span>
        ),
        icon: (
          <img src={GuestVisitIcon} style={{ height: '34px', width: '34px' }} />
        ),
        url: '/guest_visit',
      },
      {
        name: (
          <span style={{ fontSize: '22px', fontWeight: '700' }}>Meetings</span>
        ),
        icon: (
          <img src={MeetingIcon} style={{ height: '34px', width: '34px' }} />
        ),
        url: '/meeting',
      },
      {
        name: (
          <span style={{ fontSize: '22px', fontWeight: '700' }}>
            Shared Data
          </span>
        ),
        icon: (
          <img src={SharedDataIcon} style={{ height: '34px', width: '34px' }} />
        ),
        url: '/shared_data',
      },
      {
        name: (
          <span style={{ fontSize: '22px', fontWeight: '700' }}>Links</span>
        ),
        icon: <img src={LinkIcon} style={{ height: '34px', width: '34px' }} />,
        url: '/links',
      },
      {
        name: (
          <span style={{ fontSize: '22px !important', fontWeight: '700' }}>
            Register
          </span>
        ),
        icon: (
          <IconButton>
            <PersonAddAlt fontSize="large" />
          </IconButton>
        ),
        url: '/registerUser',
      },
    ],
    bottom: [
     
    ],
  };

  function logout() {
    history('/');
    localStorage.clear();
  }

  React.useEffect(() => {}, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const dropOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex' }}>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={dropOpen}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Paper
          sx={{
            width: '200px',
            height: '200px',
          }}
        >
          <Link
            to="/userProfile"
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> <span>Profile</span>
            </MenuItem>
          </Link>

          <Divider />

          <MenuItem
            onClick={handleClose}
            style={{
              marginTop: '10px',
            }}
          >
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            <span>Settings</span>
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            style={{
              marginTop: '10px',
            }}
          >
            <ListItemIcon>
              <TollOutlined fontSize="small" />
            </ListItemIcon>
            <span>Tools</span>
          </MenuItem>
          <MenuItem
            onClick={() => logout()}
            style={{
              marginTop: '10px',
            }}
          >
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Paper>
      </Menu>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: 'white', color: 'black' }}
        open={open}
      >
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
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
            <MenuIcon style={{ color: 'black' }} fontSize="large" />
          </IconButton>

          <Typography variant="h6" noWrap component="div">
            {props?.pageTile
              ? props?.pageTile
              : 'Division of international Affairs'}
          </Typography>
          <div>
            <IconButton>
              {props?.anyNotification ? (
                <NotificationsActiveIcon fontSize="large" />
              ) : (
                <NotificationsNoneIcon fontSize="large" />
              )}
            </IconButton>

            <IconButton>
              <PersonIcon onClick={handleClick} fontSize="large" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        className="h-100 d-flex justify-content-between "
        variant="permanent"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />
        <List style={{ backgroundColor: '#f07f1a', height: '100%' }}>
          {SideBarIcons['top'].map((iconObject, index) => (
            <ListItem
              key={iconObject.name}
              disablePadding
              sx={{ display: 'block' }}
            >
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
                <ListItemText
                  primary={iconObject.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List style={{ backgroundColor: '#f07f1a' }}>
          {SideBarIcons['bottom'].map((iconObject, index) => (
            <ListItem
              key={iconObject.name}
              disablePadding
              sx={{ display: 'block' }}
            >
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
                <ListItemText
                  primary={iconObject.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={props?.childSX ? props?.childSX : { flexGrow: 1, p: 3 }}
        style={{
          marginTop: props.marginTop ? props.marginTop : '2rem',
          ...props?.childCSS,
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}

// {props?.currentPageName ? props?.currentPageName : "DIVISION OF INTERNATIONAL AFFAIRS" }

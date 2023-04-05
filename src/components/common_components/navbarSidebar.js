// common imports
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// ui imports
import PageviewIcon from '@mui/icons-material/Pageview';
import DashboardIcon from '@mui/icons-material/Dashboard';
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
import WcIcon from '@mui/icons-material/Wc';
// import DashboardIcon from './resource/navbar_icons/dashboard.svg';
import GuestVisitIcon from './resource/navbar_icons/guest_visit.svg';
// import LinkIcon from './resource/navbar_icons/link.svg';
import MeetingIcon from './resource/navbar_icons/meeting.svg';
import SearchIcon from './resource/navbar_icons/search.svg';
import SettingIcon from './resource/navbar_icons/setting.svg';
import SharedDataIcon from './resource/navbar_icons/shared_data.svg';
import TeamIcon from './resource/navbar_icons/team.svg';
import ToolIcon from './resource/navbar_icons/tools.svg';
import GroupsIcon from '@mui/icons-material/Groups';
import CameraFrontIcon from '@mui/icons-material/CameraFront';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import LinkIcon from '@mui/icons-material/Link';
import {
  BookOnline,
  LabelImportant,
  Logout,
  PersonAdd,
  PersonAddAlt,
  Settings,
  TollOutlined,
} from '@mui/icons-material';
import { Avatar, Menu, MenuItem, Paper } from '@mui/material';
import DarkModeToggle from '../../DarkModeToggle';
import zIndex from '@mui/material/styles/zIndex';

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
})(({ theme, open }) => (
  
  {
    
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

  const [darkMode, setDarkMode] = React.useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };
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
          // <img src={SearchIcon} style={{ height: '34px', width: '34px',color:"inherit" }} />
          <ManageSearchIcon sx={{ fontSize: 40, fontWeight: '800', color: theme.palette.mode === 'dark' ? '#fff' : '#333' }}/>
        ),
        url: '/search',
      },

      {
        name: (
          <span style={{ fontSize: '22px', fontWeight: '700' }}>Dashboard</span>
        ),
        icon: (
          // <img src={DashboardIcon} style={{ height: '34px', width: '34px' }} />
          <DashboardIcon sx={{ fontSize: 40, fontWeight: '800', color: theme.palette.mode === 'dark' ? '#fff' : '#333' }} />
        ),
        url: '/dashboard',
      },
      {
        name: (
          <span style={{ fontSize: '22px', fontWeight: '700' }}>
            Student
          </span>
        ),
        icon: (
          <IconButton sx={{p:0}}>
            <WcIcon sx={{ fontSize: 40, fontWeight: '800', color: theme.palette.mode === 'dark' ? '#fff' : '#333' }} />
          </IconButton>
        ),
        url: '/student_master',
      },
      {
        name: <span style={{ fontSize: '22px', fontWeight: '700' }}>Team</span>,
        icon: (
       <IconButton  sx={{p:0}}>
        <GroupsIcon sx={{ fontSize: 40, fontWeight: '800', color: theme.palette.mode === 'dark' ? '#fff' : '#333' }} />
        </IconButton>
        ),
        url: '/team',
      },
      {
        name: (
          <span style={{ fontSize: '22px', fontWeight: '700' }}>
            Guest Visit
          </span>
        ),
        icon: (
          //<img src={GuestVisitIcon} style={{ height: '34px', width: '34px' }} />
          <IconButton  sx={{p:0}}>
        <CameraFrontIcon sx={{ fontSize: 40, fontWeight: '800', color: theme.palette.mode === 'dark' ? '#fff' : '#333' }} />
        </IconButton>
        ),
        url: '/guest_visit',
      },
      {
        name: (
          <span style={{ fontSize: '22px', fontWeight: '700' }}>Meetings</span>
        ),
        icon: (
          // <img src={MeetingIcon} style={{ height: '34px', width: '34px' }} />
          <IconButton  sx={{p:0}}>
          <VideoChatIcon sx={{ fontSize: 40, fontWeight: '800', color: theme.palette.mode === 'dark' ? '#fff' : '#333' }} />
          </IconButton>
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
          // <img src={SharedDataIcon} style={{ height: '34px', width: '34px' }} />
          <IconButton  sx={{p:0}}>
          <FolderSharedIcon sx={{ fontSize: 40, fontWeight: '800', color: theme.palette.mode === 'dark' ? '#fff' : '#333' }} />
          </IconButton>
        ),
        url: '/shared_data',
      },
      {
        name: (
          <span style={{ fontSize: '22px', fontWeight: '700' }}>Links</span>
        ),
        icon:(
          //  <img src={LinkIcon} style={{ height: '34px', width: '34px' }} />,
          <IconButton  sx={{p:0}}>
          <LinkIcon sx={{ fontSize: 40, fontWeight: '800', color: theme.palette.mode === 'dark' ? '#fff' : '#333' }} />
          </IconButton>
        ),
        url: '/links',
      },
      {
        name: (
          <span style={{ fontSize: '22px', fontWeight: '700' }}>
            Register
          </span>
        ),
        icon: (
          <IconButton  sx={{p:0}}>
            <PersonAddAlt sx={{ fontSize: 40, fontWeight: '800', color: theme.palette.mode === 'dark' ? '#fff' : '#333' }}  />
          </IconButton>
        ),
        url: '/registerUser',
      },
    ],
    bottom: [],
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
              mr: '1 !important',
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

          {/* <MenuItem
            onClick={handleClose}
            style={{
              marginTop: '10px',
            }}
          >
            <ListItemIcon>
             <DarkModeToggle/>
            </ListItemIcon>
            <span>Settings</span>
          </MenuItem> */}
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
        // className={darkMode ? 'dark-mode' : ''}
        style={{
          zIndex:99999 ,
          background: theme.palette.mode === 'dark' ? '#333' : '#fff',
         color:  'inherit',
        }}
        open={open}
      >
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between'}}>
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
            <MenuIcon style={{ color: 'inherit' }} fontSize="large" />
          </IconButton>

          <Typography marginLeft={10} variant="h6" noWrap component="div">
            {props?.pageTile
              ? props?.pageTile
              : 'Division of international Affairs'}
          </Typography>
          <div>
          <IconButton>
              <DarkModeToggle/>
            </IconButton>

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

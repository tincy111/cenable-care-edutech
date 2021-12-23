import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoSection from "../LogoSection";
import Logo from '../../../ui-component/Logo';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BuildIcon from '@mui/icons-material/Build';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import HelpIcon from '@mui/icons-material/Help';
import { Button } from '@mui/material';
import Header from '../Header';
import Dashboard from '../../../views/dashboard/Default';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    background:'#634699',
    borderRadius:'20px',
    // height:'300px',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    background:'#634699',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const CardStyle = styled(Card)(({ theme }) => ({
    background: '#634699',
    margin:"70px 15px 0 15px",
    borderRadius:'20px',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: '157px',
        height: '157px',
        borderRadius: '50%',
        top: '-105px',
        right: '-96px'
    }
}));
const ButtonStyle = styled(Button)(({ theme }) => ({
    background: '#fff',
    color:"#000",
    overflow: 'hidden',
    position: 'relative',
    borderRadius:'25px',
    width:'100%',
    fontWeight:'200',
    top:'10px',
    '&:hover': {
        
        backgroundColor:"#fff"
     }

   
}));


const itemList=[
    {
        text:"Dashboard",
        icon: <HomeIcon sx={{ color: '#FFF',backgroundColor:'#634699',borderRadius:"5px",padding:'3px' }}/>
    },
    {
        text:"Test Packages",
        icon: <BarChartIcon sx={{ color: '#FFF',backgroundColor:'#634699',borderRadius:"5px",padding:'3px' }}/>
    },
    {
        text:"My Test Packages",
        icon: <BusinessCenterIcon sx={{ color: '#FFF',backgroundColor:'#634699',borderRadius:"5px",padding:'3px' }}/>
    },
    {
        text:"My Schedule",
        icon: <BuildIcon sx={{ color: '#FFF',backgroundColor:'#634699',borderRadius:"5px",padding:'3px' }}/>
    }
];

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex'}} >
      <CssBaseline />
      {/* <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          
          <Header/>
          
        </Toolbar>
      </AppBar> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink:0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            border:'none'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
        <Logo width='190px'/>
          {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton> */}
        </DrawerHeader>
        <Divider sx={{width:'75%',marginLeft:'25px'}} />
        <List>
          {itemList.map((item, index) => {
              const{text,icon} = item;
              return(
                <ListItem button key={text}>
                {icon&&<ListItemIcon>
                  {icon}
                </ListItemIcon>}
                <ListItemText  primary={text}/>
              </ListItem>
              )
            }
        )}
        </List>
        <CardStyle>
            <CardContent sx={{ p: 2 }}>
                <List sx={{ p: 0, m: 0 }}>
                    <ListItem alignItems="flex-start" disableGutters sx={{ p: 0 }}>
                        <ListItemText sx={{ mt: 0 }}>
                            <HelpIcon sx={{ color: '#634699',backgroundColor:"#FFF",borderRadius:"5px",padding:'2px' }}/>
                            <Typography variant="subtitle1" sx={{ color: '#FFF',fontWeight:'bold' }}>Need Help?</Typography>
                            <Typography variant="caption" sx={{ color: '#FFF'}}>Please check our docs</Typography>
                            <ButtonStyle sx={{ fontWeight:'bold',fontSize:'13px' }}>Click Here</ButtonStyle>
                        </ListItemText>
                    </ListItem>
                </List>
            </CardContent>
        </CardStyle>
        
      </Drawer>
      {/* <Main open={open}>
        <DrawerHeader />
        <Dashboard/>
      </Main> */}
    </Box>
  );
}

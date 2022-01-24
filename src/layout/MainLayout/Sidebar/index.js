import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {MyScheduleIcon} from "../../../assets/icons";
import {DashboardIcon} from "../../../assets/icons";
import {TestPackageIcon}from "../../../assets/icons";
import {MyTestPackageIcon} from "../../../assets/icons";

import { Link, NavLink,useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Card,
  CardContent,
  Button,
  Divider,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import Logo from "../../../ui-component/Logo";



const CardStyle = styled(Card)(({ theme }) => ({
  background: "#634699",
  margin: "70px 15px 0 15px",
  borderRadius: "20px",
  overflow: "hidden",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    width: "157px",
    height: "157px",
    borderRadius: "50%",
    top: "-105px",
    right: "-96px",
  },
}));
const ButtonStyle = styled(Button)(({ theme }) => ({
  background: "#fff",
  color: "#000",
  overflow: "hidden",
  position: "relative",
  borderRadius: "25px",
  width: "100%",
  fontWeight: "200",
  top: "10px",
  "&:hover": {
    backgroundColor: "#fff",
  },
}));
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit", border: "none",backgroundColor:"#F8F9FA" },
  link: {
    textDecoration: "none",
    
  },
  activeClassName: {
    '& > .MuiListItem-button': {      
      border:"1px solid #634699",
      borderRadius:"5px",
      color:"#000",
      backgroundColor:"#fff",
      
      
      '& .MuiListItemIcon-root':{
        backgroundColor:"#634699",
        color:"#fff",
        padding:"5px",
        borderRadius:"5px",
        

        '& > .MuiTypography-root':{
          color:"#000"
        } 
        }
      }
  },
  iconClass: {
    // backgroundColor:"#634699",
    borderRadius:"5px",
    padding:"5px",
    color:"#634699",
    backgroundColor:"#fff",
    padding:"5px",
    borderRadius:"5px"
    
  },
  text:{
    '& > .MuiTypography-root':{
      padding:"10px",
      fontWeight:"bold",
      color:"#c4c4c4"
      
    }
    
  }
}));
const itemList = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    text: "Test Packages",
    icon: <TestPackageIcon />,
    link: "/test-packages",
  },
  {
    text: "My Test Packages",
    icon: <MyTestPackageIcon/>,
    link: "/my-test-packages",
  },
  {
    text: "My Schedule",
    icon: <MyScheduleIcon />,
    link: "/my-schedule",
  },
];

function Sidebar() {
  const classes = useStyles();
  return (
    <div style={{ display: "flex" }}>
      <Drawer
        style={{ width: "240px" }}
        variant="persistent"
        anchor="left"
        open={true}
        classes={{ paper: classes.drawerPaper }}
      >
        <DrawerHeader>
          <Logo width="190px" />
        </DrawerHeader>
        <Divider sx={{ width: "75%", marginLeft: "25px",color:"#E0E1E2" }} />
        <List>
          {itemList.map((item, index) => {
            const { text, icon, link } = item;
            return (
              <NavLink
                to={link}
                className={classes.link}
                activeClassName={classes.activeClassName}
                
              >
                <ListItem button>
                  <ListItemIcon className={classes.iconClass}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={text} className={classes.text}/>
                </ListItem>
              </NavLink>
            );
          })}
        </List>
        <CardStyle>
          <CardContent sx={{ p: 2 }}>
            <List sx={{ p: 0, m: 0 }}>
              <ListItem alignItems="flex-start" disableGutters sx={{ p: 0 }}>
                <ListItemText sx={{ mt: 0 }}>
                  <HelpIcon
                    sx={{
                      color: "#634699",
                      backgroundColor: "#FFF",
                      borderRadius: "5px",
                      padding: "2px",
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "#FFF", fontWeight: "bold" }}
                  >
                    Need Help?
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#FFF" }}>
                    Please check our docs
                  </Typography>
                  <ButtonStyle sx={{ fontWeight: "bold", fontSize: "13px" }}>
                    Click Here
                  </ButtonStyle>
                </ListItemText>
              </ListItem>
            </List>
          </CardContent>
        </CardStyle>
      </Drawer>
    </div>
  );
}

export default Sidebar;

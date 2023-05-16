import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Avatar
} from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";


import MenuIcon from "@mui/icons-material/Menu";


import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";

export default function Navbar({ navegationLinks }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            
          <a href='./'>
            <Avatar alt="laMaga logo" src="./andrea-img/lamaga-logo.jpeg" />
          </a>
          
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navegationLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component={NavLink}
                to={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer
          navegationLinks={navegationLinks}
          component={NavLink}
          setOpen={setOpen}
        />
      </Drawer>
    </>
  );
}
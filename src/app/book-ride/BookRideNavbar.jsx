"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import Drawer from "@mui/material/Drawer";
import { drawerList } from "./DrawerList";

const BookRideNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarClose = () => setSidebarOpen(false);
  const handleSidebarOpen = () => setSidebarOpen(true);
  return (
    <Box className="">
      <AppBar
        sx={{ backgroundColor: "#120E43" }}
        className=""
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Zosh Car
          </Typography>
          {true ? (
            <Avatar
              className="cursor-pointer"
              sx={{ bgcolor: deepOrange[500] }}
            >
              A
            </Avatar>
          ) : (
            <Button color="inherit">Lögin</Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor={"left"} open={sidebarOpen} onClose={handleSidebarClose}>
        {drawerList("left")}
      </Drawer>
    </Box>
  );
};

export default BookRideNavbar;

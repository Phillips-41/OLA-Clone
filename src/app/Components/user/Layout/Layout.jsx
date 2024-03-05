"use client";
import React from "react";
import { Grid } from "@mui/material";

const Layout = ({ Children }) => {
  return (
    <div className="h-screen">
      <Grid container>
        <Grid item xs={12} md={8} lg={5}>
          {Children}
        </Grid>
        <Grid item className="h-screen w-full" xs={0} md={4} lg={7}>
          <img
            className="w-full h-full object-cover object-right-top"
            src="https://www.drlinger.com/hs-fs/hubfs/driver-786383-edited.jpeg?width=600&name=driver-786383-edited.jpeg"
            alt=""
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;

import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import useStyles from "./styles";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grid className={classes.bodyContainer}>
      <AppBar className={classes.headerBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Beautiful Cats App
        </Typography>
        <Typography className={classes.text} align="center">
          Explore and keep track of the beautiful world of Cats!
        </Typography>
      </AppBar>

      <Grid>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.contentWrap}
        >
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;

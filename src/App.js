import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { styles } from "./css-common"

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import Schedule from "./components/tutorial.component";
import Workout from "./components/workout.component";

import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';

class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <div>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography className={classes.name} variant="h6">
              SysGym
            </Typography>
            <Link to={"/matriculas"} className={classes.link}>
              <Typography variant="body2">
                Matrículas
              </Typography>
            </Link>
            <Link to={"/add"} className={classes.link}>
              <Typography variant="body2">
                Criar nova matrícula
            </Typography>
            </Link>
            <Link to={"/schedule"} className={classes.link}>
              <Typography variant="body2">
                Minha agenda
            </Typography>
            </Link>
          </Toolbar>
        </AppBar>

          <Switch>
            <Route exact path={["/", "/matriculas"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/workout" component={Workout} />
          </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(App);
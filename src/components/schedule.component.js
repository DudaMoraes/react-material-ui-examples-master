// TODO: Agenda: lista de atividades e botão para adicionar atividade

import React, { Component } from "react";

import { Link } from "react-router-dom";

import { styles } from "../css-common"
import { TextField, Button, Grid, ListItem, withStyles } from "@material-ui/core";

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.retrieveWorkouts = this.retrieveWorkouts.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveWorkout = this.setActiveWorkout.bind(this);

    this.state = {
      workouts: [],
      currentWorkout: null,
      currentIndex: -1
    };
  }

  componentDidMount() {
    this.retrieveWorkouts();
  }

  retrieveWorkouts() {
    const treinos = [
      { descricao: 'Treino bem legal', data: '10/12/2022', horario: '15:00', professor: 'João' },
      { descricao: 'Treino bem legal 2', data: '10/12/2022', horario: '15:00', professor: 'Maria' },
      { descricao: 'Treino bem legal 3', data: '10/12/2022', horario: '15:00', professor: 'Jorge' }
    ];

    this.setState({
      workouts: treinos
    });

    // TutorialDataService.getAll()
    //   .then(response => {
    //     this.setState({
    //       workouts: response.data
    //     });
    //     console.log(response.data);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
  }

  refreshList() {
    this.retrieveWorkouts();
    this.setState({
      currentWorkout: null,
      currentIndex: -1
    });
  }

  setActiveWorkout(workout, index) {
    this.setState({
      currentWorkout: workout,
      currentIndex: index
    });
  }

  render() {
    const { classes } = this.props
    const { workouts, currentWorkout, currentIndex } = this.state;

    return (
      <div className={classes.form}>
        <Grid container>
          <Grid item md={4}>
            <h2>Agenda - Lista de treinos</h2>

            <div className="list-group">
              {workouts &&
                workouts.map((workout, index) => (
                  <ListItem
                    selected={index === currentIndex}
                    onClick={() => this.setActiveWorkout(workout, index)}
                    divider
                    button	
                    key={index}>
                    {workout.descricao}
                  </ListItem>
                ))}
            </div>

          </Grid>
          <Grid item md={8}>
            {currentWorkout ? (
              <div className={classes.tutorial}>
                <h4>Treino</h4>
                <div className={classes.detail}>
                  <label>
                    <strong>Descrição:</strong>
                  </label>{" "}
                  {currentWorkout.descricao}
                </div>
                <div className={classes.detail}>
                  <label>
                    <strong>Data:</strong>
                  </label>{" "}
                  {currentWorkout.data}
                </div>
                <div className={classes.detail}>
                  <label>
                    <strong>Horário:</strong>
                  </label>{" "}
                  {currentWorkout.horario}
                </div>
                <div className={classes.detail}>
                  <label>
                    <strong>Professor:</strong>
                  </label>{" "}
                  {currentWorkout.professor}
                </div>
              </div>
            ) : (
                <div>
                  <br />
                  <p className={classes.tutorial}></p>
                </div>
              )}
          </Grid>

          <div>
            <br/>
            <Link
              to={"/workout"}
              className={classes.edit}
              >
              Adicionar
            </Link>
          </div>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Schedule)
import React, { Component } from "react";


import { TextField, Button, withStyles } from "@material-ui/core"
import { styles } from "../css-common"

class Workout extends Component {
  constructor(props) {
    super(props);
    this.onChangeDescricao = this.onChangeDescricao.bind(this);
    this.onChangeData = this.onChangeData.bind(this);
    this.onChangeHorario = this.onChangeHorario.bind(this);
    this.onChangeProfessor = this.onChangeProfessor.bind(this);
    this.saveWorkout = this.saveWorkout.bind(this);
    this.newWorkout = this.newWorkout.bind(this);

    this.state = {
      id: null,
      descricao: "",
      data: "",
      horario: "",
      professor: "",

      submitted: false
    };
  }

  onChangeDescricao(e) {
    this.setState({
      descricao: e.target.value
    });
  }

  onChangeData(e) {
    this.setState({
      data: e.target.value
    });
  }

  onChangeHorario(e) {
    this.setState({
      horario: e.target.value
    });
  }

  onChangeProfessor(e) {
    this.setState({
      professor: e.target.value
    });
  }

  saveWorkout() {
    var data = {
      descricao: this.state.descricao,
      data: this.state.data,
      horario: this.state.horario,
      professor: this.state.professor
    };

    // TutorialDataService.create(data)
    //   .then(response => {
    //     this.setState({
    //       id: response.data.id,
    //       descricao: response.data.descricao,
    //       data: response.data.data,
    //       horario: response.data.horario,
    //       professor: response.data.professor,

    //       submitted: true
    //     });
    //     console.log(response.data);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
  }

  newWorkout() {
    this.setState({
      id: null,
      descricao: "",
      data: "",
      horario: "",
      professor: "",

      submitted: false
    });
  }

  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        {this.state.submitted ? (
          <div className={classes.form}>
              <h4>Treino criado com sucesso!</h4>
              <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={this.newWorkout}>
                  Adicionar
              </Button>
          </div>
        ) : (
              <div className={classes.form}>
                <h2>Criar treino</h2>
                <div className={classes.textField}>
                  <TextField
                    label="Descrição"
                    name="descricao"
                    value={this.state.descricao}
                    onChange={this.onChangeDescricao}
                    required
                  />
                </div>

                <div className={classes.textField}>
                  <TextField
                    label="Data"
                    name="data"
                    value={this.state.data}
                    onChange={this.onChangeData}
                    required
                  />
                </div>

                <div className={classes.textField}>
                  <TextField
                    label="Horário"
                    name="horario"
                    value={this.state.horario}
                    onChange={this.onChangeHorario}
                    required
                  />
                </div>

                <div className={classes.textField}>
                  <TextField
                    label="Professor"
                    name="professor"
                    value={this.state.professor}
                    onChange={this.onChangeProfessor}
                  />
                </div>

                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={this.saveWorkout}>
                  Criar
                </Button>
              </div>
            )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Workout)
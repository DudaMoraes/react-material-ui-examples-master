import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

import { TextField, Button, withStyles } from "@material-ui/core"
import { styles } from "../css-common"

class AddTutorial extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeCpf = this.onChangeCpf.bind(this);
        this.onChangeDataMatricula = this.onChangeDataMatricula.bind(this);
        this.onChangeServicosContratados = this.onChangeServicosContratados.bind(this);
        this.onChangePlanoPagamento = this.onChangePlanoPagamento.bind(this);
        this.onChangeFormapagamento = this.onChangeFormapagamento.bind(this);
        this.saveTutorial = this.saveTutorial.bind(this);
        this.newTutorial = this.newTutorial.bind(this);

        this.state = {
            id: null,
            title: "",
            cpf: "",
            published: false,

            submitted: false
        };
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeCpf(e) {
        this.setState({
            cpf: e.target.value
        });
    }

    onChangeDataMatricula(e) {
        this.setState({
            datamatricula: e.target.value
        });
    }

    onChangeServicosContratados(e) {
        this.setState({
            servicoscontratados: e.target.value
        });
    }

    onChangePlanoPagamento(e) {
        this.setState({
            planoPagamento: e.target.value
        });
    }
    
    onChangeFormapagamento(e) {
        this.setState({
            formapagamento: e.target.value
        });
    }



    saveTutorial() {
        var data = {
            title: this.state.title,
            cpf: this.state.cpf,
            datamatricula: this.state.datamatricula,
            servicoscontratados: this.state.servicoscontratados,
            planoPagamento: this.state.planoPagamento,
            formapagamento: this.state.formapagamento,
        };

        TutorialDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    title: response.data.title,
                    cpf: response.data.cpf,
                    datamatricula: response.data.datamatricula,
                    servicoscontratados: response.data.servicoscontratados,
                    planoPagamento: response.data.planoPagamento,
                    formapagamento: response.data.formapagamento,
                    published: response.data.published,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newTutorial() {
        this.setState({
            id: null,
            title: "",
            cpf: "",
            datamatricula: "",
            servicoscontratados: "",
            planoPagamento: "",
            formapagamento: "",
            published: false,

            submitted: false
        });
    }

    render() {
        const { classes } = this.props

        return (
            <React.Fragment>
                {this.state.submitted ? (
                    <div className={classes.form}>
                        <h4>Matricula criada com sucesso!</h4>
                        <Button
                            size="small"
                            color="primary"
                            variant="contained"
                            onClick={this.newTutorial}>
                            Add
                        </Button>
                    </div>
                ) : (
                        <div className={classes.form}>
                            <div className={classes.textField}>
                                <TextField
                                    label="Nome"
                                    name="nome"
                                    value={this.state.title}
                                    onChange={this.onChangeTitle}
                                    required
                                />
                            </div>

                            <div className={classes.textField}>
                                <TextField
                                    label="CPF"
                                    name="cpf"
                                    value={this.state.cpf}
                                    onChange={this.onChangeCpf}
                                    required
                                />
                            </div>

                            <div className={classes.textField}>
                                <TextField
                                    label="Data da matrícula"
                                    name="datamatricula"
                                    value={this.state.datamatricula}
                                    onChange={this.onChangeDataMatricula}
                                    required
                                />
                            </div>

                            <div className={classes.textField}>
                                <TextField
                                    label="Serviços contratados"
                                    name="servicoscontratados"
                                    value={this.state.servicoscontratados}
                                    onChange={this.onChangeServicosContratados}
                                    required
                                />
                            </div>

                            <div className={classes.textField}>
                                <TextField
                                    label="Plano de pagamento"
                                    name="planopagamento"
                                    value={this.state.planoPagamento}
                                    onChange={this.onChangePlanoPagamento}
                                    required
                                />
                            </div>

                            <div className={classes.textField}>
                                <TextField
                                    label="Forma de pagamento"
                                    name="formapagamento"
                                    value={this.state.formapagamento}
                                    onChange={this.onChangeFormapagamento}
                                    required
                                />
                            </div>

                            <Button
                                size="small"
                                color="primary"
                                variant="contained"
                                onClick={this.saveTutorial}>
                                Criar
                            </Button>
                        </div>
                    )}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(AddTutorial)
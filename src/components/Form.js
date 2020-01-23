import React, { Component } from 'react';
import Calculator from './Calculator';


class Form extends Component {

    state = {
        number1: undefined,
        number2: undefined,
        number3: undefined,
        number4: undefined,
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {

        const renderInput = (letter, id) => (
            <div className="input-wraper">
                <h3 className="input__h3">Podaj {letter}</h3>
                <div className="row">
                    <h3 className="input__h3--var">{letter} =</h3>
                    <input className="input" type="number" name={`number${Number(id)}`} onChange={this.handleOnChange}
                        value={id === 1 ? this.state.number1 : id === 2 ? this.state.number2 : id === 3 ? this.state.number3 : this.state.number4} />
                </div>
            </div>
        )

        let data = {
            title: null,
            abridgement: null,
            calcObj: null,
            calcObjType: null,
            inputsList: [null],
        }

        switch (this.props.title) {
            case 1:
                data.title = "Pole";
                data.abridgement = "P";
                data.calcObj = "surface";
                switch (this.props.type) {
                    case 1:
                        data.calcObjType = "type1";
                        data.inputsList = [renderInput("a", 1), renderInput("b", 2)];
                        break;
                    case 2:
                        data.calcObjType = "type2";
                        data.inputsList = [renderInput("a", 1), renderInput("b", 2), renderInput("h", 3)];
                        break;
                    case 3:
                        data.calcObjType = "type3";
                        data.inputsList = [renderInput("r", 1)];
                        break;
                    case 4:
                        data.calcObjType = "type4";
                        data.inputsList = [renderInput("a", 1)];
                        break;
                    case 5:
                        data.calcObjType = "type5";
                        data.inputsList = [renderInput("a", 1), renderInput("h", 2)];
                        break;
                    default:
                        data.calcObjType = "error";
                }
                break;
            case 2:
                data.title = "Obwód";
                data.abridgement = "Ob";
                data.calcObj = "circuit";
                switch (this.props.type) {
                    case 1:
                        data.calcObjType = "type1";
                        data.inputsList = [renderInput("a", 1), renderInput("b", 2)];
                        break;
                    case 2:
                        data.calcObjType = "type2";
                        data.inputsList = [renderInput("a", 1)];
                        break;
                    case 3:
                        data.calcObjType = "type3";
                        data.inputsList = [renderInput("a", 1), renderInput("b", 2), renderInput("c", 3), renderInput("d", 4)];
                        break;
                    case 4:
                        data.calcObjType = "type4";
                        data.inputsList = [renderInput("r", 1)];
                        break;
                    default:
                        data.calcObjType = "error";
                }
                break;
            default:
                data.title = "Tytuł";
                data.abridgement = "Skrót";
        }

        return (
            <div className="subpage__form col-6 col-12-small">
                <div className="subpage__container">

                    <h2 className="subpage__h3">{data.title}</h2>

                    {data.inputsList}

                    <Calculator
                        figure={"square"}
                        a={Number(this.state.number1)}
                        b={Number(this.state.number2)}
                        c={Number(this.state.number3)}
                        d={Number(this.state.number4)}
                        title={data.title}
                        abridgement={data.abridgement}
                        calcObj={data.calcObj}
                        calcObjType={data.calcObjType}
                    />

                </div>
            </div>
        );
    }

}

export default Form;
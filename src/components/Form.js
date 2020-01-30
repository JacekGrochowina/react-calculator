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
                    <input className="input" type="number" name={`number${Number(id)}`} onChange={this.handleOnChange} min="0"
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
            case "surface":
                data.title = "Pole";
                data.abridgement = "P";
                data.calcObj = "surface";
                switch (this.props.type) {
                    case "square":
                        data.calcObjType = "square";
                        data.inputsList = [renderInput("a", 1)];
                        break;
                    case "rectangle":
                        data.calcObjType = "rectangle";
                        data.inputsList = [renderInput("a", 1), renderInput("b", 2)];
                        break;
                    case "rhomb":
                        data.calcObjType = "rhomb";
                        data.inputsList = [renderInput("a", 1), renderInput("h", 2)];
                        break;
                    case "parallelogram":
                        data.calcObjType = "parallelogram";
                        data.inputsList = [renderInput("a", 1), renderInput("h", 2)];
                        break;
                    case "trapeze":
                        data.calcObjType = "trapeze";
                        data.inputsList = [renderInput("a", 1), renderInput("b", 2), renderInput("h", 3)];
                        break;
                    case "circle":
                        data.calcObjType = "circle";
                        data.inputsList = [renderInput("r", 1)];
                        break;
                    default:
                        data.calcObjType = "error";
                }
                break;

            case "circuit":
                data.title = "Obwód";
                data.abridgement = "Ob";
                data.calcObj = "circuit";
                switch (this.props.type) {
                    case "square":
                        data.calcObjType = "square";
                        data.inputsList = [renderInput("a", 1)];
                        break;
                    case "rectangle":
                        data.calcObjType = "rectangle";
                        data.inputsList = [renderInput("a", 1), renderInput("b", 2)];
                        break;
                    case "rhomb":
                        data.calcObjType = "rhomb";
                        data.inputsList = [renderInput("a", 1)];
                        break;
                    case "parallelogram":
                        data.calcObjType = "parallelogram";
                        data.inputsList = [renderInput("a", 1), renderInput("b", 2)];
                        break;
                    case "trapeze":
                        data.calcObjType = "trapeze";
                        data.inputsList = [renderInput("a", 1), renderInput("b", 2), renderInput("c", 3), renderInput("d", 4)];
                        break;
                    case "circle":
                        data.calcObjType = "circle";
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
                        figure={this.props.name}
                        num1={Number(this.state.number1)}
                        num2={Number(this.state.number2)}
                        num3={Number(this.state.number3)}
                        num4={Number(this.state.number4)}
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
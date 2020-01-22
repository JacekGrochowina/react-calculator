import React, { Component } from 'react';
import Calculator from './Calculator';


class Form extends Component {

    state = {
        number1: undefined,
        number2: undefined,
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {

        let data = {
            title: null,
            abridgement: null,
            calcObj: null,
            calcObjType: null,
        }

        switch (this.props.title) {
            case 1:
                data.title = "Pole";
                data.abridgement = "P";
                data.calcObj = "surface";
                switch (this.props.type) {
                    case 1:
                        data.calcObjType = "type1";
                        break;
                    case 2:
                        data.calcObjType = "type2";
                        break;
                    case 3:
                        data.calcObjType = "type3";
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
                        break;
                    case 2:
                        data.calcObjType = "type2";
                        break;
                    case 3:
                        data.calcObjType = "type3";
                        break;
                    case 4:
                        data.calcObjType = "type4";
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

                    {/* Input */}
                    <div className="input-wraper">
                        <h3 className="input__h3">Podaj a</h3>
                        <div className="row">
                            <h3 className="input__h3--var">a =</h3>
                            <input className="input" type="number" name="number1" value={this.state.number1} onChange={this.handleOnChange} />
                        </div>
                    </div>

                    {/* Input */}
                    <div className="input-wraper">
                        <h3 className="input__h3">Podaj b</h3>
                        <div className="row">
                            <h3 className="input__h3--var">b =</h3>
                            <input className="input" type="number" name="number2" value={this.state.number2} onChange={this.handleOnChange} />
                        </div>
                    </div>

                    <Calculator
                        figure={"square"}
                        a={Number(this.state.number1)}
                        b={Number(this.state.number2)}
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
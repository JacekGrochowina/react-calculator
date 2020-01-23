import React, { Component } from 'react';

class Calculator extends Component {

    state = {
        figure: this.props.name,
        a: undefined,
        b: undefined,
        c: undefined,
        d: undefined,
        result: undefined,
    }

    calculator = {
        surface: {
            type1(number1, number2) {
                let result = number1 * number2;
                return result;
            },
            type2(number1, number2, number3) {
                let result = 0.5 * ((number1 + number2) * number3);
                return result;
            },
            type3(number1) {
                let result = 3.14 * number1 * number1;
                return result;
            },
            type4(number1) {
                let result = number1 * number1;
                return result;
            },
        },
        circuit: {
            type1(number1, number2) {
                let result = 2 * (number1) + 2 * (number2);
                return result;
            },
            type2(number1) {
                let result = 4 * number1;
                return result;
            },
            type3(number1, number2, number3, number4) {
                let result = number1 + number2 + number3 + number4;
                return result;
            },
            type4(number1) {
                let result = 2 * 3.14 * number1;
                return result;
            },
            type5(number1) {
                let result = number1 * 4;
                return result;
            },
        }
    }

    componentDidMount = () => {
        this.setState({
            a: this.props.a,
            b: this.props.b,
            c: this.props.c,
            d: this.props.d,
            // result: this.calculator.surface.type1(this.state.a, this.state.b),
        })
    }

    componentDidUpdate(previousProps, previousState) {

        if (previousProps !== this.props) {
            switch (this.props.calcObj) {
                case "surface":
                    switch (this.props.calcObjType) {
                        case "type1":
                            this.setState({
                                a: this.props.a,
                                b: this.props.b,
                                result: this.calculator.surface.type1(this.props.a, this.props.b),
                            })
                            break;
                        case "type2":
                            this.setState({
                                a: this.props.a,
                                b: this.props.b,
                                c: this.props.c,
                                result: this.calculator.surface.type2(this.props.a, this.props.b, this.props.c),
                            })
                            break;
                        case "type3":
                            this.setState({
                                a: this.props.a,
                                b: this.props.b,
                                result: this.calculator.surface.type3(this.props.a),
                            })
                            break;
                        case "type4":
                            this.setState({
                                a: this.props.a,
                                b: this.props.b,
                                result: this.calculator.surface.type4(this.props.a),
                            })
                            break;
                        case "type5":
                            this.setState({
                                a: this.props.a,
                                b: this.props.b,
                                result: this.calculator.surface.type1(this.props.a, this.props.b),
                            })
                            break;
                        default:
                            this.setState({
                                a: this.props.a,
                                b: this.props.b,
                                c: this.props.c,
                                d: this.props.d,
                                result: undefined,
                            })
                    }
                    break;
                case "circuit":
                    switch (this.props.calcObjType) {
                        case "type1":
                            this.setState({
                                a: this.props.a,
                                b: this.props.b,
                                result: this.calculator.circuit.type1(this.props.a, this.props.b),
                            })
                            break;
                        case "type2":
                            this.setState({
                                a: this.props.a,
                                result: this.calculator.circuit.type2(this.props.a),
                            })
                            break;
                        case "type3":
                            this.setState({
                                a: this.props.a,
                                b: this.props.b,
                                c: this.props.c,
                                d: this.props.d,
                                result: this.calculator.circuit.type3(this.props.a, this.props.b, this.props.c, this.props.d),
                            })
                            break;
                        case "type4":
                            this.setState({
                                a: this.props.a,
                                result: this.calculator.circuit.type4(this.props.a),
                            })
                            break;
                        default:
                            this.setState({
                                a: this.props.a,
                                b: this.props.b,
                                c: this.props.c,
                                d: this.props.d,
                                result: undefined,
                            })
                    }
                    break;
                default:
                    this.setState({
                        a: this.props.a,
                        b: this.props.b,
                        c: this.props.c,
                        d: this.props.d,
                        result: "error",
                    })
            }
        }

    }

    render() {

        const { result } = this.state;
        const { title, abridgement } = this.props;

        return (

            <div className="input-wraper">
                <h3 className="input__h3">{title}</h3>
                <div className="row">
                    <h3 className="input__h3--var">{abridgement} =</h3>
                    <input className="input input--result" type="number" disabled="disabled"
                        value={result}
                    />
                </div>
            </div>

        );
    }

}

export default Calculator;
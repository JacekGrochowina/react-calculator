import React, { Component } from 'react';

class Calculator extends Component {

    state = {
        figure: this.props.name,
        num1: undefined,
        num2: undefined,
        num3: undefined,
        num4: undefined,
        result: undefined,
    }

    calc = {
        surface: {
            square(a) {
                let result = a * a;
                return result;
            },
            rectangle(a, b) {
                let result = a * b;
                return result;
            },
            rhomb(a, h) {
                let result = a * h;
                return result;
            },
            parallelogram(a, h) {
                let result = a * h;
                return result;
            },
            trapeze(a, b, h) {
                let result = 0.5 * ((a + b) * h);
                return result;
            },
            circle(r) {
                let result = 3.1415 * r * r;
                return result;
            },
        },
        circuit: {
            square(a) {
                let result = a * 4;
                return result;
            },
            rectangle(a, b) {
                let result = 2 * a + 2 * b;
                return result;
            },
            rhomb(a) {
                let result = a * 4;
                return result;
            },
            parallelogram(a, b) {
                let result = 2 * a + 2 * b;
                return result;
            },
            trapeze(a, b, c, d) {
                let result = a + b + c + d;
                return result;
            },
            circle(r) {
                let result = 2 * 3.1415 * r;
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

        const { num1, num2, num3, num4, calcObjType, calcObj } = this.props;

        if (previousProps !== this.props) {

            switch (calcObj) {
                case "surface":
                    switch (calcObjType) {
                        case "square":
                            this.setState({
                                num1: num1,
                                result: this.calc.surface.square(num1),
                            })
                            break;
                        case "rectangle":
                            this.setState({
                                num1: num1,
                                num2: num2,
                                result: this.calc.surface.rectangle(num1, num2),
                            })
                            break;
                        case "rhomb":
                            this.setState({
                                num1: num1,
                                num2: num2,
                                result: this.calc.surface.rhomb(num1, num2),
                            })
                            break;
                        case "parallelogram":
                            this.setState({
                                num1: num1,
                                num2: num2,
                                result: this.calc.surface.parallelogram(num1, num2),
                            })
                            break;
                        case "trapeze":
                            this.setState({
                                num1: num1,
                                num2: num2,
                                num3: num3,
                                result: this.calc.surface.trapeze(num1, num2, num3),
                            })
                            break;
                        case "circle":
                            this.setState({
                                num1: num1,
                                result: this.calc.surface.circle(num1),
                            })
                            break;
                        default:
                            this.setState({
                                num1: num1,
                                num2: num2,
                                num3: num3,
                                num4: num4,
                                result: undefined,
                            })
                    }
                    break;

                case "circuit":
                    switch (calcObjType) {
                        case "square":
                            this.setState({
                                num1: num1,
                                result: this.calc.circuit.square(num1),
                            })
                            break;
                        case "rectangle":
                            this.setState({
                                num1: num1,
                                num2: num2,
                                result: this.calc.circuit.rectangle(num1, num2),
                            })
                            break;
                        case "rhomb":
                            this.setState({
                                num1: num1,
                                result: this.calc.circuit.rhomb(num1),
                            })
                            break;
                        case "parallelogram":
                            this.setState({
                                num1: num1,
                                result: this.calc.circuit.parallelogram(num1, num2),
                            })
                            break;
                        case "trapeze":
                            this.setState({
                                num1: num1,
                                num2: num2,
                                num3: num3,
                                num4: num4,
                                result: this.calc.circuit.trapeze(num1, num2, num3, num4),
                            })
                            break;
                        case "circle":
                            this.setState({
                                num1: num1,
                                result: this.calc.circuit.circle(num1),
                            })
                            break;
                        default:
                            this.setState({
                                num1: num1,
                                num2: num2,
                                num3: num3,
                                num4: num4,
                                result: undefined,
                            })
                    }
                    break;

                default:
                    this.setState({
                        num1: num1,
                        num2: num2,
                        num3: num3,
                        num4: num4,
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
import React, { Component } from 'react';

class Calculator extends Component {

    state = {
        name: this.props.name,
        a: undefined,
        b: undefined,
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
        }
    }

    componentDidMount = () => {
        this.setState({
            a: this.props.a,
            b: this.props.b,
            result: this.calculator.surface.type1(this.state.a, this.state.b),
        })
    }

    componentDidUpdate(previousProps, previousState) {

        if (previousProps !== this.props) {
            this.setState({
                a: this.props.a,
                b: this.props.b,
                result: this.calculator.surface.type1(this.props.a, this.props.b),
            })
        }

    }

    render() {

        return (

            <div className="input-wraper">
                <h3 className="input__h3">Pole</h3>
                <div className="row">
                    <h3 className="input__h3--var">P =</h3>
                    <input className="input input--result" type="number" disabled="disabled"
                        value={this.state.result}
                    />
                </div>
            </div>

        );
    }

}

export default Calculator;
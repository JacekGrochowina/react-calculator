import React, { Component } from 'react';
import ButtonWraper from '../components/ButtonWraper';
import Calculator from '../components/Calculator';


class SquarePage extends Component {

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
        return (
            <div className="square subpage" >

                <ButtonWraper path="/" text="wstecz" type="back" />

                <section className="subpage__section">

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

                    <Calculator name={"square"} a={Number(this.state.number1)} b={Number(this.state.number2)} />
                </section>

            </div>
        );
    }

}

export default SquarePage;
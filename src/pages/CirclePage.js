import React, { Component } from 'react';
import ButtonWraper from '../components/ButtonWraper';
import Form from '../components/Form';


class CirclePage extends Component {

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
                <section className="subpage__section row">
                    <Form title="surface" type={this.props.options.name} />
                    <Form title="circuit" type={this.props.options.name} />
                </section>
            </div>
        );
    }

}

export default CirclePage;
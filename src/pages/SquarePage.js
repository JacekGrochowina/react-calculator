import React, { Component } from 'react';
import ButtonWraper from '../components/ButtonWraper';
import Form from '../components/Form';


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


                <section className="subpage__section row">

                    {
                        /* Props => Form 
                        
                            title={1}   =>  "Surface" / "Pole"
                                  {2}   =>  "Circuit" / "Obwód"
                        
                            title={1}   =>  type={1}  / number1*number2
                                                 {2}  / 0,5*((number1+number2)*number3)
                                                 {3}  / 3,14*number1*number1
                                                 {4}  / number1*number1
                                            
                            title={2}   =>  type={1}  / 2*(number1)+2*(number2)
                                                 {2}  / 4*(number1)
                                                 {3}  / number1+number2+number3+number4
                                                 {4}  / 2*3,14*number1
                        */
                    }

                    <Form title={1} type={4} />
                    <Form title={2} type={2} />

                </section>

            </div>
        );
    }

}

export default SquarePage;
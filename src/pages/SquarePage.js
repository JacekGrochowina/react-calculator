import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ButtonWraper from '../components/ButtonWraper';

const SquarePage = () => {
    return (
        <div className="square subpage">
            <ButtonWraper path="/" text="wstecz" type="back" />

            <section className="subpage__section">
                <h1>Kwadrat</h1>
            </section>

        </div>
    )
}

export default SquarePage;
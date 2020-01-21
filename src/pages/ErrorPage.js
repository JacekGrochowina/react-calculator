import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ButtonWraper from '../components/ButtonWraper';

const ErrorPage = () => {

    return (
        <div className="error subpage">
            <ButtonWraper path="/" text="wstecz" type="back" />

            <section className="subpage__section">
                <h1 className="error__h1">Coś nie tak ...</h1>
                <h3 className="error__h3">Nie udało się znaleźć takiej strony</h3>
                <FontAwesomeIcon icon={['fas', 'frown-open']} className="error__icon" />
            </section>

        </div>
    )
}

export default ErrorPage;
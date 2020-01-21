import React from 'react';
import ButtonWraper from '../components/ButtonWraper';

const RectanglePage = () => {
    return (
        <div className="subpage">
            <ButtonWraper path="/" text="wstecz" type="back" />

            <section className="subpage__section">
                <h1>Prostokąt</h1>
            </section>

        </div>
    )
}

export default RectanglePage;
import React from 'react';
import ButtonWraper from '../components/ButtonWraper';

const CubePage = () => {
    return (
        <div className="subpage">
            <ButtonWraper path="/" text="wstecz" type="back" />

            <section className="subpage__section">
                <h1>Sześcian</h1>
            </section>

        </div>
    )
}

export default CubePage;
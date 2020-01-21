import React from 'react';

/* Fonts Awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faChevronLeft,
    faFrownOpen,
} from '@fortawesome/free-solid-svg-icons';

/* Styles */
import '../sass/main.scss';

import Header from './Header';
import Page from './Page';
import Footer from './Footer';

const App = () => {

    library.add(
        fab,
        faChevronLeft,
        faFrownOpen,
    );

    // library.add(fab, faCheckSquare, faCoffee);
    // library.add(fas, faFrown);

    return (
        <div className="app container">

            <Header />

            <main className="app__main">
                <Page />
            </main>

            <Footer />

        </div>
    );
}

export default App;
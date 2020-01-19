import React from 'react';

import '../sass/main.scss';

import Header from './Header';
import Page from './Page';
import Footer from './Footer';

const App = () => {
    return (
        <div className="app container">

            <Header />

            <main className="app__main main">
                <Page />
            </main>

            <Footer />

        </div>
    );
}

export default App;
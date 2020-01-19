import React from 'react';

import '../sass/main.scss';

import Header from './Header';
import Page from './Page';
import Footer from './Footer';

function App() {
    return (
        <div className="app">

            <Header />

            <main>
                <Page />
            </main>

            <Footer />

        </div>
    );
}

export default App;
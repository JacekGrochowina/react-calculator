import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Pages */
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import SquarePage from '../pages/SquarePage';
import RectanglePage from '../pages/RectanglePage';
import RhombPage from '../pages/RhombPage';
import ParallelogramPage from '../pages/ParallelogramPage';
import TrapezePage from '../pages/TrapezePage';
import CirclePage from '../pages/CirclePage';
import CubePage from '../pages/CubePage';
import CuboidPage from '../pages/CuboidPage';

const Page = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/kwadrat" exact component={SquarePage} />
                    <Route path="/prostokat" exact component={RectanglePage} />
                    <Route path="/romb" exact component={RhombPage} />
                    <Route path="/rownoleglobok" exact component={ParallelogramPage} />
                    <Route path="/trapez" exact component={TrapezePage} />
                    <Route path="/kolo" exact component={CirclePage} />
                    <Route path="/szescian" exact component={CubePage} />
                    <Route path="/prostopadloscian" exact component={CuboidPage} />
                    <Route component={ErrorPage} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default Page;
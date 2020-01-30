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

/* Import Images */
import SquareIcon from '../images/square.svg';
import RectangleIcon from '../images/rectangle.svg';
import RhombIcon from '../images/rhomb.svg';
import ParallelogramIcon from '../images/parallelogram.svg';
import TrapezeIcon from '../images/trapeze.svg';
import CircleIcon from '../images/circle.svg';

/* Main Data Object */
const options = [
    {
        id: 1,
        title: "Kwadrat",
        name: "square",
        icon: SquareIcon,
        path: "/kwadrat",
    },
    {
        id: 2,
        title: "Prostokąt",
        name: "rectangle",
        icon: RectangleIcon,
        path: "/prostokat",
    },
    {
        id: 3,
        title: "Romb",
        name: "rhomb",
        icon: RhombIcon,
        path: "/romb",
    },
    {
        id: 4,
        title: "Równoległobok",
        name: "parallelogram",
        icon: ParallelogramIcon,
        path: "/rownoleglobok",
    },
    {
        id: 5,
        title: "Trapez",
        name: "trapeze",
        icon: TrapezeIcon,
        path: "/trapez",
    },
    {
        id: 6,
        title: "Koło / Okrąg",
        name: "circle",
        icon: CircleIcon,
        path: "/kolo",
    },
]

const Page = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact render={(props) => <HomePage options={options} />} />

                    <Route path="/kwadrat" exact render={(props) => <SquarePage options={options[0]} />} />
                    <Route path="/prostokat" exact render={(props) => <RectanglePage options={options[1]} />} />
                    <Route path="/romb" exact render={(props) => <RhombPage options={options[2]} />} />
                    <Route path="/rownoleglobok" exact render={(props) => <ParallelogramPage options={options[3]} />} />
                    <Route path="/trapez" exact render={(props) => <TrapezePage options={options[4]} />} />
                    <Route path="/kolo" exact render={(props) => <CirclePage options={options[5]} />} />

                    <Route component={ErrorPage} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default Page;
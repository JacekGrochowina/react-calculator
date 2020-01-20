import React from 'react';
import { Link } from "react-router-dom";
import Option from '../components/Option';

/* Import Images */
import Square from '../images/square.svg';
import Rectangle from '../images/rectangle.svg';
import Rhomb from '../images/rhomb.svg';
import Parallelogram from '../images/parallelogram.svg';
import Trapeze from '../images/trapeze.svg';
import Circle from '../images/circle.svg';
import Cube from '../images/cube.svg';
import Cuboid from '../images/cuboid.svg';

const options = [
    {
        id: 1,
        title: "Kwadrat",
        icon: Square,
        path: "/kwadrat",
    },
    {
        id: 2,
        title: "Prostokąt",
        icon: Rectangle,
        path: "/prostokat",
    },
    {
        id: 3,
        title: "Romb",
        icon: Rhomb,
        path: "/romb",
    },
    {
        id: 4,
        title: "Równoległobok",
        icon: Parallelogram,
        path: "/rownoleglobok",
    },
    {
        id: 5,
        title: "Trapez",
        icon: Trapeze,
        path: "/trapez",
    },
    {
        id: 6,
        title: "Koło / Okrąg",
        icon: Circle,
        path: "/kolo",
    },
    {
        id: 7,
        title: "Sześcian",
        icon: Cube,
        path: "/szescian",
    },
    {
        id: 8,
        title: "Prostopadłościan",
        icon: Cuboid,
        path: "/prostopadloscian",
    }
]

const style = "home__option option col-3 col-4-medium col-6-small col-12-xsmall";

const HomePage = () => {

    const optionsList = options.map(option => (
        <Link to={option.path} className={style}>
            <Option key={option.key} {...option} />
        </Link>
    ));

    return (
        <div className="home row">
            {optionsList}
        </div>
    )
}

export default HomePage;
import React from 'react';
import { Link } from "react-router-dom";
import Option from '../components/Option';

const style = "home__option option col-3 col-4-medium col-6-small col-12-xsmall";

const HomePage = (props) => {

    const optionsList = props.options.map(option => (
        <Link to={option.path} key={option.key} className={style}>
            <Option {...option} />
        </Link>
    ));

    return (
        <div className="home row">
            {optionsList}
        </div>
    )
}

export default HomePage;
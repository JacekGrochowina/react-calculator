import React from 'react';
import Option from '../components/Option';

const options = [
    {
        id: 1,
        title: "Kwadrat",
        icon: 'null',
    },
    {
        id: 2,
        title: "Prostokąt",
        icon: 'null',
    },
    {
        id: 3,
        title: "Romb",
        icon: 'null',
    }
]

const HomePage = () => {

    const optionsList = options.map(option => (
        <Option key={option.key} {...option} />
    ));

    return (
        <div className="home">
            {optionsList}
        </div>
    )
}

export default HomePage;
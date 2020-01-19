import React from 'react';

const Option = (props) => {

    return (
        <div className="main__option">
            <h3>{props.id}. {props.title}</h3>
        </div>
    )

}

export default Option;
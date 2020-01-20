import React from 'react';

const Option = (props) => {

    return (
        <>
            <div className="wraper">
                <img className="option__img" src={props.icon} alt={props.title} />
            </div>
            <h4 className="option__h4">{props.title}</h4>
        </>
    )

}

export default Option;
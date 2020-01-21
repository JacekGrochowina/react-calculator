import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = (props) => {

    return (
        <>
            <Link to={props.path} className="button">
                {props.type === 'back' ? <FontAwesomeIcon icon={['fas', 'chevron-left']} /> : null}
                {props.text}
            </Link>
        </>
    )

}

export default Button;
import React from 'react';

import Button from '../components/Button';

const ButtonWraper = (props) => {

    return (
        <div className="button-wraper">
            <Button path={props.path} text={props.text} type={props.type} />
        </div>
    )

}

export default ButtonWraper;
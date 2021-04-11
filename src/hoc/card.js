import React from 'react';


const Card = (props) => {

    const style = {
        background:'lightgrey'
    }



    return(
        <div style={style}>
            Test<br/>
            {props.children}
        </div>
    )
}

export default Card;
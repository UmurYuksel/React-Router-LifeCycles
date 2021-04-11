import React from 'react';


const Conditional = () => {

    //one way
    //const value = false;

    //second way
    const retVal = () => {
        return true
    }

    //third way

    const returnSome = () => {
        return (
            retVal() ?
                <div>
                    Hello, it's true
            </div> :
                <div>
                    Hi, it's false
                </div>

        )
    }

    return (
        <div>
            {
                returnSome()    
            }
        </div>
    )
}

export default Conditional;
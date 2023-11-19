import React from 'react'
function EyesOnMe(){
    function handleFoucs(){
        console.log('Good!')
    }
    function handleBlur(){
        console.log('Hey! Eyes on me!')
    }
    return (
        <div>
           <button onFocus={handleFoucs} onBlur={handleBlur} >Eyes on me </button> 
        </div>
    )
}
export default EyesOnMe
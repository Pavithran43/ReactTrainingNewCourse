import React from 'react';

function Point(Props){
    return(

        <div>
            <h1>Hello World! {Props.name}</h1>
            <h1>My age is{Props.age}</h1>
            <Thunder />
        </div>
    )
}


class Thunder extends React.Component{

render(){
    return(
        <div>
            <h1>hi this is my elemment</h1>
            <p>note this point represent</p>

        </div>
    )
}
}

export default Point
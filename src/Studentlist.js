import React from 'react';

class ClassDemo extends React.Component{
    
    constructor(){
    super();
    this.state={
        studentList:[
            {name:"Surseh", age:26, emailid:"Suresh2@gamil.com"},
            {name:"vicky",age:28,emailid:"vicky3@gmail.com"},
            {name:"karina",age:24,emailid:"karina3@gmail.com"}

        ]
    } ;
    
}
    
    render(){
        return(
            <div>
                <h1>Student Details</h1>
                {this.state.studentList.map((name) => <Student studentDetails={name} />)}
            </div>
        );
    };
}

class Student extends React.Component{
    render(){
        return(
            <div>
            <ul><li> <h3>{this.props.studentDetails.name}-{this.props.studentDetails.age}-{this.props.studentDetails.emailid}</h3></li></ul>
            </div>
        );
    };
};

export default ClassDemo;
import React from 'react';

class BookListDemo extends React.Component{

constructor(){
    super();
    this.state ={
        BookList :[
            {bookName:"Java",author:"John",published:1992},
            {bookName:"Python",author:"Ritchard",published:1999},
            {bookName:"C++",author:"Kerenel",published:1996},
            {bookName:"Reactjs",author:"ferandas",published:1998}
        ]
    }


}

handleSubmit=() =>{
    this.setState({BookList:[{bookName:"Angular",author:"david",published:2022}]})
}
    render(){
        return(
            <div>
                <h1>BookName :</h1>
                
                    {this.state.BookList.map((bookName) => <Book Bookdetails ={bookName}/>)}
                
                <button type='submit' onClick={this.handleSubmit}>Submit</button>
            </div>

        )
    }
}

class Book extends React.Component{
    render(){
        return(
        <div>
          <ul><li>  <h2>{this.props.Bookdetails.bookName}-{this.props.Bookdetails.author}-{this.props.Bookdetails.published}</h2></li></ul>
        
        </div>)
    }

}
export default BookListDemo;
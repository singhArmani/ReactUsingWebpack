import React from 'react';



export default class BookList extends React.Component {
    //E6 new style

    constructor(props) {
        super(props);

        //defining state for this component
        this.state = {books:[
            {
                name:"The Golden Bird",
                author:"Amandeep Singh"
            },
            {
                name:"Harry Potter and the Deathly Hollows",
                author:"Malkeet Singh"
            },
            {
                name:"My Journey of struggle",
                author:"Rasmeet Kour"
            }],
            selectedBooks:[] //empty selectedBooks
        };

        //As we are retrieving state of our component in handleSelectedBooks function
        //we have to bind the function with out React Component class using bind method
        this.handleSelectedBooks= this.handleSelectedBooks.bind(this);

    }

    handleSelectedBooks(event){
        console.log(event.target.value);
        var _selectedBooks = this.state.selectedBooks;

        //getting index of the selected book
        var index = _selectedBooks.indexOf(event.target.value);

        if(event.target.checked){
            (index === -1) ? _selectedBooks.push(event.target.value): _selectedBooks.splice(index,1);

        }
    }

    handleSubmit(event){
       console.log(event);
        event.preventDefault();
        console.log("Form Submited!");
    }

    //this function will render the book with the name and the author
    RenderBook(book){
        return(
                <div className="checkbox">
                    <label>
                        <input type="checkbox"
                               value= {book.name}
                               onChange= {this.handleSelectedBooks}
                        />{book.name} -- {book.author}
                    </label>
                </div>
        );
    }

   render(){
       //getting all books from the state
       var Books = this.state.books.map((book) => this.RenderBook(book));

      return (
          <div>
            <h1>Choose from wide variety of Books available in our store</h1>
              <form onSubmit={this.handleSubmit}>
                {Books}
                  <input type="submit" value ="submit" className="btn btn-success"/>
              </form>
          </div>
      );
   }
}

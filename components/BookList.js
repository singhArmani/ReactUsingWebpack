import React from 'react';



export default class BookList extends React.Component {
    //E6 new style

    constructor(props){
        super(props);
        this.state = {name:'BookList'};
    }
    

   render(){
      return (
          <h1>Choose from wide variety of Books available in our store</h1>
      );
   }
}

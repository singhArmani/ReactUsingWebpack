import React from "react";
import BookList from './BookList';
import ShippingDetails from './ShippingDetails';
import DeliveryDetaits from './DeliveryDetails';
/**
 * Created by singh on 8/07/2016.
 */

//ES6 syntax

 export default class App extends React.Component {
    //E6 style
    constructor(props){
        super(props);
        this.state = {currentStep:1}; //new way of assigning value to step
    }
    
     render(){
         switch (this.state.currentStep){
             case 1:
                 return <BookList/>;
             case 2:
                 return <ShippingDetails/>;
             case 3:
                 return <DeliveryDetails />;
         }
     }
}
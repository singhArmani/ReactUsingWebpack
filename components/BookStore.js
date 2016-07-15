import React from "react";
import BookList from './BookList';
import ShippingDetails from './ShippingDetails';
import DeliveryDetails from './DeliveryDetails';
import Confirmation from './Confirmation';
import Success from './Sucess';
/**
 * Created by singh on 8/07/2016.
 */

//ES6 syntax

 export default class BookStore extends React.Component {
    //E6 style
    constructor(props){
        super(props);
        this.state = {currentStep:1, formValues:{}}; //new way of assigning value to step
        this.updateFormData = this.updateFormData.bind(this);
    }
    
    updateFormData(formData){

        var formValues = Object.assign({},this.state.formValues,formData);
        this.setState({currentStep:this.state.currentStep+1, formValues:formValues});

    }
    
     render(){
         switch (this.state.currentStep){
             case 1:
                 return <BookList updateFormData ={this.updateFormData}/>;
             case 2:
                 return <ShippingDetails updateFormData ={this.updateFormData}/>;
             case 3:
                 return <DeliveryDetails updateFormData ={this.updateFormData}/>;
             case 4:
                 return <Confirmation  data = {this.state.formValues} updateFormData ={this.updateFormData}/>;
             case 5:
                 return <Success data = {this.state.formValues} />
             default:
                 return <BookList updateFormData ={this.updateFormData} />;
         }
     }
}
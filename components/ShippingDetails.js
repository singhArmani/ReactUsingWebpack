import React from 'react';



export default class ShippingDetails extends React.Component {
    //E6 new style

    constructor(props){
        super(props);
        this.state = {Address:'-'};
    }
    
    render(){
        return (
            <h1>Please Enter your Shipping Details</h1>
        );
    }
}

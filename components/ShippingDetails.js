import React from 'react';



export default class ShippingDetails extends React.Component {
    //E6 new style

    constructor(props){
        super(props);
        this.state = {firstName:'',contactNumber:'', shippingAddress:''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        console.log('form has been submitted');
    }
    
    handleChange(event,attribute){
        var newState = this.state; //grabbing the intial value of state here
        newState[attribute] = event.target.value; //putting the new changed value into respective attribute
        this.setState(newState); //setting this as new state
    }
    
    render(){
        return (
            <div>
                <h3>Please Enter your Shipping Details</h3>

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>FirstName: </label>
                            <input type="text"  className="form-control" value={this.state.firstName} onChange={(event) => this.handleChange(event,'firstName')}/>
                        </div>

                        <div className="form-group">
                            <label>ContactNumber: </label>
                            <input type="text" className="form-control" value={this.state.contactNumber} onChange={(event) => this.handleChange(event,'contactNumber')}/>
                        </div>

                        <div className="form-group">
                            <label> Shipping Address: </label>
                            <input type="text" className="form-control" value={this.state.shippingAddress} onChange={(event) => this.handleChange(event,'shippingAddress')}/>
                        </div>

                            <button className="btn btn-success" type="submit">Submit</button>
                    </form>

            </div>
        );
    }
}

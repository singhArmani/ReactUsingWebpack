import React from 'react';



export default class ShippingDetails extends React.Component {
    //E6 new style

    constructor(props){
        super(props);
        this.state = {fullName:'',contactNumber:'', shippingAddress:'', error:false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateInput = this.validateInput.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();

        //update the form values here
        var formData = {fullName:this.state.fullName,
                        contactNumber:this.state.contactNumber,
                        shippingAddress:this.state.shippingAddress};

        if(this.validateInput()) this.props.updateFormData(formData); //submitting the form after full validation
    }

    validateInput(){

        //defining the type of error depending upon the field being not filled
        if(this.state.fullName === ''){
            this.setState({error:'Please Enter Your Full Name!'});
        }else if(this.state.contactNumber === ''){
            this.setState({error:'Please Enter Your Contact Number!'});
        }else if(this.state.shippingAddress === ''){
            this.setState({error :'Please Enter Your Shipping Address!'});
        }else {
            this.setState({error:false});
            return true;
        }
    }
    
    handleChange(event,attribute){
        var newState = this.state; //grabbing the intial value of state here
        newState[attribute] = event.target.value; //putting the new changed value into respective attribute
        this.setState(newState); //setting this as new state
    }


    //Render Error
    renderError(){
        if(this.state.error){
            return (
                <div className="alert alert-danger">
                    {this.state.error}
                </div>
            );
        }
    }
    
    render(){
        var errorMessage = this.renderError();
        return (
            <div>
                <h3>Please Enter your Shipping Details</h3>
                {errorMessage}
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Full Name: </label>
                            <input type="text"  className="form-control" placeholder="Full Name" value={this.state.fullName} onChange={(event) => this.handleChange(event,'fullName')}/>
                        </div>

                        <div className="form-group">
                            <label>ContactNumber: </label>
                            <input type="text" className="form-control" placeholder="Contact Number" value={this.state.contactNumber} onChange={(event) => this.handleChange(event,'contactNumber')}/>
                        </div>

                        <div className="form-group">
                            <label> Shipping Address: </label>
                            <input type="text" className="form-control" placeholder="Shipping Address" value={this.state.shippingAddress} onChange={(event) => this.handleChange(event,'shippingAddress')}/>
                        </div>

                            <button className="btn btn-success" type="submit">Submit</button>
                    </form>

            </div>
        );
    }
}


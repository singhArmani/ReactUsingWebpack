import React from 'react';
import Input from 'react-bootstrap/lib/Input';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default class TextInput extends React.Component {
    //E6 new style

    constructor(props){
        super(props);
        this.state = {name:'-'};
        this._handleChange = this.handleChange.bind(this);

    }

    //React Class  style won't do autobinding for it's method. 
    handleChange(event){

      this.setState ({name:event.target.value}); //setting the state ton new object
    }

   render(){
      return (
          <form>
              <FormGroup
                  controlId="formBasicText">
                  <ControlLabel>ReactJS Application using nmp, babel6 and webpack</ControlLabel>
                  <FormControl
                      type="text"
                       value={this.state.name}
                        onChange = {this._handleChange}
                  />
                  <FormControl.Feedback />
                  <HelpBlock>Implementing React-BootStrap.</HelpBlock>
              </FormGroup>
          </form>
      );
   }
}
import React from 'react';
import Input from 'react-bootstrap/lib/Input';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default class TextInput extends React.Component {
   render(){
      return (
          <form>
              <FormGroup
                  controlId="formBasicText">
                  <ControlLabel>ReactJS Application using nmp, babel6 and webpack</ControlLabel>
                  <FormControl
                      type="text"
                      placeholder="Enter Text"
                  />
                  <FormControl.Feedback />
                  <HelpBlock>Implementing React-BootStrap.</HelpBlock>
              </FormGroup>
          </form>
      );
   }
}
import React from "react";
import TextInput from './TextInput'

/**
 * Created by singh on 8/07/2016.
 */

//ES6 syntax

 export default class App extends React.Component {
     render(){
         return (<div>
            <h2>This is a React App. </h2>
             <TextInput/>
         </div>);
     }
}
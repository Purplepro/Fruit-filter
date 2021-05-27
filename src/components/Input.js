import React, {Component} from 'react';


export default class Input extends Component {
    render() {
        return (
           <div>
               <label htmlFor='fruit-filter'>filter these fruits:</label>
               <input type='text' name='fruit-fuilter' id='fruit-filter'/>
           </div>
        )
    }
}
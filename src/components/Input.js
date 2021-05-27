import React, {Component} from 'react';


export default class Input extends Component {
    render() {
        //iterate trhough the list of fruits that are passed down as props and display
    
        return (
           <div>
               <label htmlFor='fruit-filter'>filter these fruits:</label>
               <input type='text' name='fruit-filter' id='fruit-filter' value={this.props.fruitVal} onChange={this.props.onChange}/>
           </div>
        )
    }
}
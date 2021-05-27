import React, {Component} from 'react';
import List from './List';
import Input from './Input';

export default class Fruit extends Component {
        state = {
            fruitsToDisplay: this.props.fruits,
            fruitValue: ''
        }

        handleFilterChange = (e) => {
            e.preventDefault();
            let value = e.target.value;  

            const filterFruitList = this.props.fruits.filter(fruit => {
                //we want to check to see of the filter value is included within the fruits
                        if(fruit.includes(value.toLowerCase())) { //app is included in banana (fals)
                                return true;
                        }
            })

            this.setState({
                fruitsToDisplay: filterFruitList,
                fruitValue: value 
            })
        }

    render() {
        return (
           <div>
               <Input fruitVal={this.state.fruitValue} onChange={this.handleFilterChange}/>
               <List fruits={this.state.fruitsToDisplay}/>
           </div>
        )
    }
}
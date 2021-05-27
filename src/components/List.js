import React, {Component} from 'react';


export default class List extends Component {
    render() {
        const fruitItems = this.props.fruits.map((fruit, idx) => {
            return <li key={idx}>{fruit}</li>
        })
        return (
            <ul>
                {/*list of fruits*/}
                {fruitItems}
            </ul>
        )
    }
}


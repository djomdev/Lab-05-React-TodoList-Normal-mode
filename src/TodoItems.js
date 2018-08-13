import React, { Component } from 'react';
import "./TodoList.css";


class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item){
        return <li>
                    <input  className="item_checkbox" type="checkbox" value="on"/>
                    {item.text} 
                    <i 
                    onClick={() => this.delete(item.key)}
                    key={item.key}
                    class="fas fa-times"></i>
                    </li>
    }

    delete(key){
        console.log("key is: " + key)
        this.props.delete(key);
    }


    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
            {listItems}
            </ul>
        );
    }
}

export default TodoItems;
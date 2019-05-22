import React, {Component} from 'react';

import TodoListItem from '../TodoLIstItem/';

import './style.scss';

export default class TodoList extends Component {
  
  render() {
    const {
      todos,
      onAdd,
      onDeleted,
      onImportant,
      onDone,
    } = this.props;

    const items = todos.map((item) => {
      const {id, ...itemsProps} = item;

      return(
        <li key={id} className='tl-todo-list_item'>
          <TodoListItem 
            { ... itemsProps }
            onAdd={onAdd}
            onDeleted={() => onDeleted(id)}
            onImportant={() => onImportant(id)}
            onDone={() => onDone(id)}
          />
        </li>
      )
    });

    return(
      <ul className='tl-todo-list'>
        {items}
      </ul>
    )
  }
}
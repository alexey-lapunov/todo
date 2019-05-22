import React, {Component} from 'react';

import AppHeader from './../AppHeader/';
import SearchPanel from './../SearchPanel/';
import TodoList from './../TodoLIst/';
import ItemStatusFilter from './../ItemStatusFilter';
import AddedPanel from './../AddedPanel'
import StatusWork from './../StatusWork'

import 'normalize.css/normalize.css';
import './style.scss';

export default class App extends Component {
  constructor(props) {
    super();

    this.minId = 100;

    this.state = {
      todos: [
        {
          id: '1',
          label: 'Drink Coffe',
          important: false,
          done: false
        },
        {
          id: '2',
          label: 'Creat React App',
          important: true,
          done: false
        }, 
        {
          id: '3',
          label: 'Drink Vodka s Koreshami',
          important: true,
          done: false
        }
      ],
      search: '',
      filter: 'all',
      statusFilter: {
        all: true,
        done: false,
        active: false,
      }
    }
  }

  onAddItem = (text) => {
    if(text) {
      this.setState(({todos}) => {
        const obj = {
          id: this.minId++, 
          label: text,
          important: false,
          done: false
        };
  
        const newArray = [...todos, obj];
  
        return {todos: newArray}
      })
    }
  };

  onDeletedItem = (id) => {
    this.setState(({ todos }) => {
      const index = todos.findIndex((elem) => elem.id === id);
      const newArray = todos.filter((item, i) => {
        return i !== index;
      });

      return { todos: newArray }
    })
  };

  toggleProperty = (arr, id, field) => {
    const index = arr.findIndex((elem) => elem.id === id);
    const newArray = arr.slice(0);

    newArray[index][field] = !newArray[index][field];

    return newArray;
  };

  onImportant = (id) => {
    this.setState(({ todos  }) => {
      const res = this.toggleProperty(todos, id, 'important');

      return { todos: res };
    });
  };

  onDone = (id) => {
    this.setState(({ todos }) => {
      const res = this.toggleProperty(todos, id, 'done');

      return { todos: res };
    })
  };

  onSearch = (text) => {
    this.setState({
      search: text.trim()
    });
  };

  onFilter = (filter) => {
    this.setState({
      filter: filter
    });
  };

  searchItems(text) {
    return this.state.todos.filter((item) => {
      return(item.label.toLowerCase().includes(text))
    });
  };

  filterItems(arr, filter) {
    if(filter === 'all') {
      return arr;
    } else if(filter === 'active') {
      return arr.filter((item) => {
        return !item.done
      })
    } else if(filter === 'done') {
      return arr.filter((item) => {
        return item.done
      })
    }
  };

  render() {
    const doneCount = this.state.todos.filter((el) => el.done).length;
    const moreCount = this.state.todos.length - doneCount;
    const visible = this.filterItems(this.searchItems(this.state.search), this.state.filter)

    return(
      <div>
        <div className='tl-content'>
          <div className='tl-container'>
            <AppHeader />
            <StatusWork
              countDone={doneCount}
              countMore={moreCount}
            />
            <div className='tl-search'>
              <div className='tl-search-grid'>
                <div className='tl-search-grid-col -left'>
                  <SearchPanel 
                    onSearch={this.onSearch}
                  />
                </div>
                <div className='tl-search-grid-col -right'>
                  <ItemStatusFilter
                    filter={this.state.filter}
                    onFilter={this.onFilter}
                  />
                </div>
              </div>
            </div>
            <TodoList 
              todos={visible}
              onDeleted={this.onDeletedItem}
              onImportant={this.onImportant}
              onDone={this.onDone}
              done={this.state.done}
              important={this.state.important}
            />
            <AddedPanel onAdd={this.onAddItem}/>
          </div>
        </div>
      </div>
    ) 
  }
}
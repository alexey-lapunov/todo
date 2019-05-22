import React, {Component} from 'react';

import './style.scss';

export default class TodoListItem extends Component {
  render() {
    const { label, important = false, done } = this.props;
    let textClassName = '';

    if(important) {
      textClassName += ' -important'
    }

    if(done) {
      textClassName += ' -done'
    }

    return(
      <div className='tl-list-item'>
        <div className='tl-list-item_text'>
          <span
            onClick={this.props.onDone}
            className={textClassName}
            >{label}</span>
        </div>
        <div className='tl-list-item-buttons'>
          <div className='tl-list-item-buttons-grid'>
            <div className='tl-list-item-buttons-grid-col'>
              <button 
                onClick={this.props.onDeleted}
                className='tl-list-item_button'
                >R</button>
            </div>
            <div className='tl-list-item-buttons-grid-col'>
              <button 
                onClick={this.props.onImportant}
                className='tl-list-item_button'
                >!</button>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}
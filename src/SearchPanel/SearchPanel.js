import React, {Component} from 'react';

import './style.scss'
export default class SearchPanel extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: ''
    }
  };

  getInputValue = (e) => {
    this.props.onSearch(e.target.value);
  };

  render() {
    return(
      <div className='tl-search-panel'>
        <div className='tl-search-panel_input'>
          <input 
            type='text' 
            placeholder='search'
            onChange={this.getInputValue}
            />
        </div>
      </div>
    )
  }
}
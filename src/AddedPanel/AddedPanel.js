 import React, {Component} from 'react';

import './style.scss';

export default class AddedPanel extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
    };
  };

  getInputValue = (e) => {
    this.setState({inputValue: e.target.value});
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onAdd(this.state.inputValue.trim());
    this.setState({inputValue: ''})
  };

  render() {
    const { inputValue } =  this.state;

    return(
      <form className='tl-added-panel'
            onSubmit={this.onSubmit}
      >
        <input
          className='tl-added-panel_input'
          onChange={this.getInputValue}
          value={inputValue}
          type='text'
        />
        <button
          className='tl-added-panel_button'
          type='submit'
        >Added</button>
      </form>

    )
  }
}
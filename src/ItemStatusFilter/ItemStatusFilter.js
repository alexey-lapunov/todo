import React, { Component } from 'react';

import './style.scss'

export default class ItemStatusFilter extends Component {

  getFilter = (e) => {
    const name = e.target.getAttribute('dataname');

    this.props.onFilter(name);
  }

  render() {
    const buttons = [
      {label: 'All', name: 'all'},
      {label: 'Active', name: 'active'},
      {label: 'Done', name: 'done'}
    ];
    return(
      <div className='tl-filter'>
        {
          buttons.map((item, i) => {
            let btnClassName = 'tl-filter_button';
            if(item.name === this.props.filter) btnClassName += ' -active';

            return(
              <div key={i} className='tl-filter_item'>
                <button
                  onClick={this.getFilter}
                  dataname={item.name}
                  className={btnClassName}
                  >{item.label}</button>
              </div>
            ) 
          })
        }
      </div>
    )
  } 
}
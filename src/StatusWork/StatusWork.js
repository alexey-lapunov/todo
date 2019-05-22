import React, {Component} from 'react';

export default class StatusWork extends Component {
  render() {
    const { countMore = 0, countDone = 0 } = this.props;

    return(
      <h2>{countMore} more to do, {countDone} done</h2>
    )
  };
}
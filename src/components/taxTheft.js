import React from 'react';

export class TaxTheft extends React.Component {
  handleTheft(e) {
    const robKitty = e.target.value;
    this.props.onClick(robKitty);
  }

  constructor(props) {
    super(props);
    this.handleTheft = this.handleTheft.bind(this);
  }

  render() {
    return(
      <input type="button" value="Rob Uncle Sam" onClick={this.handleTheft}></input>
    )
  }
}

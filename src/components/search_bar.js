import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props){
    super(props);
    //super tells class to go up the scope chain and use method on parent object
    this.state = { term: '' };
    //constructor function is only place where you will initialize state
    //every where else in your code you will just be updating state
  }
  //functional components do not have state, only class based components do
  render () {
    return (
    <div className="search-bar">
      <input
      value={this.state.term}
      //above is controlled component, has it's value set by state, value only changes when state changes
      onChange={event => this.onInputChange(event.target.value)} />
    </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

// class based components are used in situations where elements need to keep track of user input/ changes to the DOM
// functional components should come first, then refactor into class based component
//handling events has two steps, first, declare event handler, then pass event handler to the element you want to handle the event
//any time there is state change, all components are rerendered

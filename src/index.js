// Create a new component. This component should produce some HTML

// Take this component generated HTML and put it on the page
// const variables never change, App will never be reassigned
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//do not need .js extension as long as JavaScript file
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyANBVLnswr-92MPvzdzl3k9qRiqtj-hMb4';

class App extends Component  {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch( {key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      //ES6 syntactic suger - will resolve as this.setState({ videos: videos })
    });
  }
  render () {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
//downwards data flow, only most parent component in application should be responsible for fetching data

// JSX is a subset of JavaScript which allows you to write what looks like HTML, but it is actually JavaScript behind the scenes

ReactDOM.render(<App / >, document.querySelector('.container'));

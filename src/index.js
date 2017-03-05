// Create a new component. This component should produce some HTML
// Take this component generated HTML and put it on the page
// const variables never change, App will never be reassigned
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//do not need .js extension as long as JavaScript file
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyA225pU2aw2JM4-IiI-7gyeB27KuN083Gc';

class App extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };
    this.videoSearch('surfboards');
  }
  videoSearch(term) {
    YTSearch( {key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
      //ES6 syntactic suger - will resolve as this.setState({ videos: videos })
    });
  }
  render () {

    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}
//downwards data flow, only most parent component in application should be responsible for fetching data

// JSX is a subset of JavaScript which allows you to write what looks like HTML, but it is actually JavaScript behind the scenes

ReactDOM.render(<App / >, document.querySelector('.container'));
